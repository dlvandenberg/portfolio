<script lang="ts">
	import { BlogPost } from '$apps/blog';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<svelte:head>
	<title>{data.post.title} - Blog - vdberg.dev</title>
</svelte:head>

<BlogPost post={data.post} />
