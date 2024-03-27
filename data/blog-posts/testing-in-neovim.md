---
title: Testing in Neovim
description: How to configure and run tests (with debugger) in Neovim
dateAdded: 2024-03-13
---

I have been using [Neovim](https://neovim.io/) for a while now as a replacement for VSCode. After some initial configuration, I could efficiently develop different JavaScript/TypeScript projects in Neovim. One thing that was missing, was the ability to run tests and debug them. There are some plugins available with documentation on how to set them up, but I wanted to share my setup and how I got it working.

# Prerequisities

- My projects mostly are monorepo's, some plugins required additional configuration for it to work.
- I am using [lazy.nvim](https://github.com/folke/lazy.nvim) as the plugin manager for Neovim.
- I am using [mason.nvim](https://github.com/williamboman/mason.nvim) to manage LSP's and other tools.

# Javascript Debug Adapter

I have installed the [js-debug-adapter](https://github.com/microsoft/vscode-js-debug) using Mason.

# Required plugins

## neotest

I am using [neotest](https://github.com/nvim-neotest/neotest) to run all of the tests inside Neovim. It has several adapters that I use:

- [neotest-jest](https://github.com/nvim-neotest/neotest-jest?tab=readme-ov-file)
- [neotest-vitest](https://github.com/marilari88/neotest-vitest)
- [neotest-playwright](https://github.com/thenbe/neotest-playwright)

You can look at the plugin documentation on how to install and configure it. Below you will see my neotest configuration.

```lua
return {
  "nvim-neotest/neotest",
  dependencies = {
    "nvim-lua/plenary.nvim",
    "antoinemadec/FixCursorHold.nvim",
    -- Adapters
    "nvim-neotest/neotest-jest",
    "nvim-neotest/neotest-plenary",
    "marilari88/neotest-vitest",
    "thenbe/neotest-playwright",
    -- Debugging
    "mfussenegger/nvim-dap",
  },
  config = function()
    local neotest = require("neotest")
    local jest = require("neotest-jest")
    local vitest = require("neotest-vitest")
    local playwright = require("neotest-playwright")

    -- ╭─────────────────────────────────────────────────────────╮
    -- │ Adapters                                                │
    -- ╰─────────────────────────────────────────────────────────╯
    neotest.setup({
      adapters = {
        require("neotest-plenary"),
        jest({
          jestCommand = "npx jest",
          jestConfigFile = function(file)
            -- Find the jest config in monorepo projects
            if string.find(file, "/(apps|libs|features)/") then
              return string.match(file("(.-/[^/]+/)src")) .. "jest.config.ts"
            end
          end,
          cwd = function(path)
            return vim.fn.getcwd()
          end,
        }),
        vitest({
          filter_dir = function(name, rel_path, root)
            return name ~= "node_modules"
          end,
        }),
        playwright.adapter({
          options = {
            enable_dynamic_test_discovery = true,
            get_playwright_config = function()
              return vim.loop.cwd() + "/playwright.config.js"
            end,
          },
        }),
      },
    })

    -- ╭─────────────────────────────────────────────────────────╮
    -- │ Keymaps                                                 │
    -- ╰─────────────────────────────────────────────────────────╯
    local opts = { noremap = true, silent = true }
    local get_opts = require("utils").create_get_opts(opts)

    local keymap = vim.keymap

    keymap.set("n", "<leader>tt", neotest.run.run, get_opts({ desc = "[T]est File" }))
    keymap.set("n", "<leader>ta", function()
      neotest.run.run({ vim.fn.expand("%") })
    end, get_opts({ desc = "[T]est File" }))
    keymap.set("n", "<leader>to", neotest.output.open, get_opts({ desc = "[T]est [O]utput" }))
    keymap.set("n", "<leader>tp", neotest.output_panel.toggle, get_opts({ desc = "[T]est Output [P]anel" }))
    keymap.set("n", "<leader>ts", neotest.summary.toggle, get_opts({ desc = "[T]est [S]ummary" }))
    keymap.set("n", "<leader>tl", neotest.run.run_last, get_opts({ desc = "[T]est] [L]ast" }))
    keymap.set("n", "<leader>tw", function()
      neotest.run.run({ jestCommand = "npx jest --watch" })
    end, get_opts({ desc = "[T]est] [W]atch" }))
    keymap.set("n", "<leader>td", function()
      neotest.run.run({ vim.fn.expand("%"), strategy = "dap" })
    end, get_opts({ desc = "[T]est [D]ebug" }))
  end,
}
```

## nvim-dap

For the debugging part, I am using [nvim-dap](https://github.com/mfussenegger/nvim-dap). Below you will see my configuration for it.

```lua
return {
  "mfussenegger/nvim-dap",
  dependencies = {
    "nvim-neotest/nvim-nio",
    "rcarriga/nvim-dap-ui",
    "theHamsta/nvim-dap-virtual-text",
  },
  config = function()
    local dap = require("dap")
    local dapui = require("dapui")
    local telescope = require("telescope").extensions.dap
    -- ╭─────────────────────────────────────────────────────────╮
    -- │ Adapters                                                │
    -- ╰─────────────────────────────────────────────────────────╯
    dap.adapters["pwa-node"] = {
      type = "server",
      host = "localhost",
      port = "${port}",
      executable = {
        command = "js-debug-adapter", -- The debug adapter installed via Mason
        args = { "${port}" },
      },
    }

    -- ╭─────────────────────────────────────────────────────────╮
    -- │ Configurations                                          │
    -- ╰─────────────────────────────────────────────────────────╯
    local languages = {
      "javascript",
      "typescript",
      "svelte",
    }
    for _, language in ipairs(languages) do
      dap.configurations[language] = {
        {
          type = "pwa-node",
          request = "launch",
          name = "Launch Current File (pwa-node)",
          cwd = vim.fn.getcwd(),
          args = { "${file}" },
          sourceMaps = true,
          protocol = "inspector",
        },
        {
          type = "pwa-node",
          request = "launch",
          name = "Launch Current File (pwa-node with ts-node)",
          cwd = vim.fn.getcwd(),
          args = { "${file}" },
          sourceMaps = true,
          protocol = "inspector",
          runtimeExecutable = "node",
          runtimeArgs = {
            "--loader",
            "ts-node/esm",
          },
          resolveSourceMapLocations = {
            vim.fn.getcwd() .. "/**",
            "!**/node_modules/**",
          },
          skipFiles = { "<node_internals>/**", "node_modules/**" },
        },
        {
          type = "pwa-node",
          request = "attach",
          name = "Attach Program (pwa-node, select pid)",
          cwd = vim.fn.getcwd(),
          processId = require("dap.utils").pick_process,
          skipFiles = { "<node_internals>/**" },
        },
      }
    end

    -- ╭─────────────────────────────────────────────────────────╮
    -- │ Keymaps                                                 │
    -- ╰─────────────────────────────────────────────────────────╯
    local opts = { noremap = true, silent = true }
    local get_opts = require("utils").create_get_opts(opts)

    local keymap = vim.keymap
    keymap.set("n", "<leader>db", dap.toggle_breakpoint, get_opts({ desc = "[D]ebug [B]reakpoint" }))
    keymap.set("n", "<leader>dB", function()
      dap.set_breakpoint(vim.fn.input("Breakpoint condition: "))
    end, get_opts({ desc = "Set Conditional Breakpoint" }))

    keymap.set("n", "<leader>dc", dap.continue, get_opts({ desc = "[D]ebug [C]ontinue" }))
    keymap.set("n", "<leader>dn", dap.step_over, get_opts({ desc = "[D]ebug [N]ext" }))
    keymap.set("n", "<leader>di", dap.step_into, get_opts({ desc = "[D]ebug Step [I]nto" }))
    keymap.set("n", "<leader>do", dap.step_out, get_opts({ desc = "[D]ebug Step [O]ut" }))
    keymap.set("n", "<leader>dr", dap.repl.open, get_opts({ desc = "[D]ebug [R]epl" }))
    keymap.set("n", "<leader>dx", function()
      dap.disconnect({ terminateDebuggee = true })
    end, get_opts({ desc = "[D]ebug [X] Disconnect" }))

    -- ╭─────────────────────────────────────────────────────────╮
    -- │ DAP UI                                                  │
    -- ╰─────────────────────────────────────────────────────────╯
    dapui.setup()
    keymap.set("n", "<leader>du", dapui.toggle, get_opts({ desc = "[D]ebug [U]I" }))

    dap.listeners.before.attach["dapui_config"] = function()
      dapui.open()
    end

    dap.listeners.before.launch["dapui_config"] = function()
      dapui.open()
    end

    dap.listeners.before.event_terminated["dapui_config"] = function()
      dapui.close()
    end

    dap.listeners.before.event_exited["dapui_config"] = function()
      dapui.close()
    end
    -- ╭─────────────────────────────────────────────────────────╮
    -- │ Telescope DAP                                           │
    -- ╰─────────────────────────────────────────────────────────╯
    keymap.set("n", "<leader>dm", telescope.commands, get_opts({ desc = "[D]ebug [C]ommands" }))
    keymap.set("n", "<leader>dl", telescope.list_breakpoints, get_opts({ desc = "[D]ebug Breakpoint [L]ist" }))
    keymap.set("n", "<leader>dv", telescope.variables, get_opts({ desc = "[D]ebug [V]ariables" }))
    keymap.set("n", "<leader>df", telescope.frames, get_opts({ desc = "[D]ebug [F]rames" }))

    -- ╭─────────────────────────────────────────────────────────╮
    -- │ NeoDev integration                                      │
    -- ╰─────────────────────────────────────────────────────────╯
    local neodev = require("neodev")
    neodev.setup({
      library = {
        plugins = {
          "nvim-dap-ui",
        },
        types = true,
      },
    })

    -- ╭─────────────────────────────────────────────────────────╮
    -- │ Virtual Text support                                    │
    -- ╰─────────────────────────────────────────────────────────╯
    local virtualtext = require("nvim-dap-virtual-text")
    virtualtext.setup()
  end,
}
```

# Run tests

Assuming that you're using the same keybindings as I have configured, you can run tests for a given file using `<leader>tt`. I like to have the test summary panel visible, you can do that by using `<leader>ts`. For any other commands, please refer to the plugin documentation.

# Debug tests

Assuming that you're using the same keybindings as I have, you can create breakpoints using `<leader>db`. You can even set a conditional breakpoint using `<leader>dB`. Start your tests in debug mode using `<leader>td`. You can continue the execution using `<leader>dc`, step over using `<leader>dn`, step into using `<leader>di`, and step out using `<leader>do`.
