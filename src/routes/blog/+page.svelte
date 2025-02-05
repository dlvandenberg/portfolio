<script lang="ts">
	import { BlogPostList } from '$apps/blog';
	import type { PageData } from './$types';
	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<svelte:head>
	<title>Blog Posts - vdberg.dev - Personal Portfolio</title>
</svelte:head>

{#if data}
	<BlogPostList posts={data.posts} />
{/if}
