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
			exclude: ['**/index.ts', '**/*.d.ts', '**/*.spec.ts', '**/__tests__/*.svelte'],
			reporter: ['text', 'json', 'html'],
		},
	},

	css: {
		preprocessorOptions: {
			scss: {
				additionalData:
					'@use "src/styles/variables.scss" as *; @use "src/styles/font.scss" as *; @use "src/styles/mixins.scss" as *;',
			},
		},
	},
};

export default config;
