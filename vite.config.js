import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
		globals: true,
		environment: 'jsdom',
		setupFiles: ['src/setupTest.ts'],
		coverage: {
			all: true,
			include: ['src/**/*.{ts,svelte}'],
			exclude: ['**/index.ts', '**/*.d.ts'],
			reporter: ['text', 'json', 'html'],
		},
	},

	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@use "src/variables.scss" as *; @use "src/font.scss" as *;',
			},
		},
	},
};

export default config;
