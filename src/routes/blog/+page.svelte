<script lang="ts">
	import { BlogPostList } from '$apps/blog';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<title>Blog Posts - vdberg.dev - Personal Portfolio</title>
</svelte:head>

{#if data}
	<BlogPostList posts={data.posts} />
{/if}
