<script lang="ts">
	import { Markdown, Section, Skills } from '$lib/components';
	import type { BlogPost } from '../../domain/model';
	import { formatDate } from '$lib/date';

	export let post: BlogPost;
</script>

<div class="wrapper -animate-fade-in">
	<Section title={post.title} subtitle={formatDate(post.dateAdded)}>
		<svelte:fragment slot="header-actions">
			<a href="/blog" class="back-link"><div class="back-link__button">&lt;_</div></a>
		</svelte:fragment>
		<div class="md-wrapper" slot="outline-col">
			<Markdown source={post.content} />
		</div>
	</Section>

	{#if post.tags && post.tags.length >= 1}
		<Section title="tagged">
			<svelte:fragment slot="outline-col">
				<Skills skills={post.tags} />
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
