<script>
  import '../app.css';

  let menuOpen = false
</script>

<div class="w-full z-50 top-0 py-3 bg-coffee">
  <div class="container flex items-center justify-between text-white">
    <div>
      <a href="/" class="text-3xl font-thin">devd.be</a>
    </div>
    <div class="w-10 h-15">
      <a href="/" on:click={ () => menuOpen = true }>
        <div id="nav-burger" class="space-y-2">
          <div class="w-8 h-0.5 bg-white"></div>
          <div class="w-8 h-0.5 bg-white"></div>
          <div class="w-8 h-0.5 bg-white"></div>
        </div>
      </a>
      <div id="nav" class:hidden="{ !menuOpen }" class="absolute h-full w-full top-0 left-0 py-3 flex flex-col items-start bg-coffee">
        <div class="container flex-none flex items-center justify-between">
          <div>
            <a href="/" class="text-3xl font-thin">devd.be</a>
          </div>
          <a href="/" on:click={ () => menuOpen = false }>
            <div id="nav-cross" class="space-y-2">
              <div class="w-8 h-0.5 rotate-45 translate-y-1.5 bg-white"></div>
              <div class="w-8 h-0.5 -rotate-45 -translate-y-1 bg-white"></div>
            </div>
          </a>
        </div>
        <div class="container flex-col flex flex-auto items-center justify-around p-20 bg-coffee">
            <nav class="flex-col flex items-center justify-between h-40">
              <a href="/" class="text-3xl text-blue font-thin hover:text-yellow active:text-gold">home</a>
              <a href="/" class="text-3xl font-thin hover:text-yellow active:text-gold">projects</a>
              <a href="/" class="text-3xl font-thin hover:text-yellow active:text-gold">blog</a>
            </nav>
        </div>
      </div>
    </div>
  </div>
</div>

<div id="content" class="w-full h-full p-4">
  <slot/>
</div>

<style>
  #content {
    background-image: radial-gradient(rgb(163, 144, 0, 0.1) 1px, #342E37 1px);
    background-position: 0 0;
    background-size: 1em 1em;
    height: 100vh;
    width: 100vw;
  }
</style>