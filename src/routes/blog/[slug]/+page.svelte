<script lang="ts">
	import { BlogPost } from '$apps/blog';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.post.title} - Blog - vdberg.dev</title>
</svelte:head>

<BlogPost post={data.post} />
