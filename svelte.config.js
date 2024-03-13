import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		preprocess({
			scss: {
				prependData:
					'@use "src/styles/variables.scss" as *; @use "src/styles/font.scss" as *; @use "src/styles/mixins.scss" as *;',
			},
		}),
	],

	kit: {
		adapter: adapter(),
		prerender: {
			entries: ['*', '/code-snippets/remove-old-git-remotes'],
		},
		alias: {
			'$apps/code-snippets': './apps/code-snippets/index',
			'$apps/portfolio': './apps/portfolio/index',
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
