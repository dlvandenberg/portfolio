<script lang="ts">
	import { ItemList } from '$lib/components';
	import type { BlogPostLink } from '../../domain/model';

	export let posts: BlogPostLink[];
</script>

{#if posts.length > 0}
	<div class="wrapper -animate-fade-in">
		<ItemList title="blog_posts()" items={posts} subtitle="Helpful guides or tips" />
	</div>
{/if}
