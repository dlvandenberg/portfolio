<script lang="ts">
	import { Markdown, Section, Skills } from '$lib/components';
	import { formatDate } from '$lib/date';
	import type { CodeSnippetPost } from '../../domain/model';

	export let snippet: CodeSnippetPost;
</script>

<div class="wrapper -animate-fade-in">
	<Section title={snippet.title} subtitle={formatDate(snippet.dateAdded)}>
		<svelte:fragment slot="header-actions">
			<a href="/code-snippets" class="back-link"><div class="back-link__button">&lt;_</div></a>
		</svelte:fragment>
		<div class="md-wrapper" slot="outline-col">
			<Markdown source={snippet.content} />
		</div>
	</Section>

	{#if snippet.tags && snippet.tags.length >= 1}
		<Section title="tagged">
			<svelte:fragment slot="outline-col">
				<Skills skills={snippet.tags} />
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
