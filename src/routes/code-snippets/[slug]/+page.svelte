<script lang="ts">
	import Markdown from '$lib/components/markdown.svelte';
	import Section from '$lib/components/section.svelte';
	import Skills from '$lib/components/skills.svelte';
	import { formatDate } from '$lib/date';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.snippet.title} - Code Snippets - vdberg.dev</title>
</svelte:head>

<div class="wrapper -animate-fade-in">
	<Section title={data.snippet.title} subtitle={formatDate(data.snippet.dateAdded)}>
		<svelte:fragment slot="header-actions">
			<a href="/code-snippets" class="back-link"><div class="back-link__button">&lt;_</div></a>
		</svelte:fragment>
		<div class="md-wrapper" slot="outline-col">
			<Markdown source={data.snippet.content} />
		</div>
	</Section>

	{#if data.snippet.tags && data.snippet.tags.length >= 1}
		<Section title="tagged">
			<svelte:fragment slot="outline-col">
				<Skills skills={data.snippet.tags} />
			</svelte:fragment>
		</Section>
	{/if}
</div>

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
