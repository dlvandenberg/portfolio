<script lang="ts">
	import Section from '$lib/components/section.svelte';
	import SvelteMarkdown from 'svelte-markdown';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.snippet.title} - Code Snippets - vdberg.dev</title>
</svelte:head>

<Section title={data.snippet.title}>
	<svelte:fragment slot="header-actions">
		<a href="/code-snippets" class="back-link"><div class="back-link__button">&lt;_</div></a>
	</svelte:fragment>
	<div class="md-wrapper" slot="outline-col">
		<SvelteMarkdown source={data.snippet.content} />
	</div>
</Section>

<style lang="scss">
	.back-link {
		&__button {
			font-size: 1.1rem;
			padding: 0.2rem 0.4rem;
			border: 1px solid $color-sand-500;
			color: $color-sand-100;

			&:hover {
				border-color: $color-yellow;
				color: $color-yellow;
			}
		}
	}
</style>
