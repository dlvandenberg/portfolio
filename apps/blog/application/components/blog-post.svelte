<script lang="ts">
	import { Markdown, Section, Skills } from '$lib/components';
	import type { BlogPost } from '../../domain/model';
	import { formatDate } from '$lib/date';

	interface Props {
		post: BlogPost;
	}

	let { post }: Props = $props();
</script>

<div class="wrapper -animate-fade-in">
	<Section title={post.title} subtitle={formatDate(post.dateAdded)}>
		{#snippet headerActions()}
			<a href="/blog" class="back-link"><div class="back-link__button">&lt;_</div></a>
		{/snippet}
		{#snippet outlineCol()}
			<div class="md-wrapper">
				<Markdown source={post.content} />
			</div>
		{/snippet}
	</Section>

	{#if post.tags && post.tags.length >= 1}
		<Section title="tagged">
			{#snippet outlineCol()}
				<Skills skills={post.tags} />
			{/snippet}
		</Section>
	{/if}
</div>

<style lang="scss">
	@use '$styles/variables' as *;
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
