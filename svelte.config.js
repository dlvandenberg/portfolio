import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		prerender: {
			entries: ['*', '/blog/remove-old-git-remotes', '/blog/testing-in-neovim'],
		},
		alias: {
			'$apps/blog': './apps/blog/index',
			'$apps/portfolio': './apps/portfolio/index',
			'$styles/*': './src/styles/',
		},
		typescript: {
			config: (config) => ({
				...config,
				include: [...config.include, '../apps/**/*.svelte', '../apps/**/*.ts'],
			}),
		},
	},
};

export default config;
