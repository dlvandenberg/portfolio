<script lang="ts">
	import { CodeSnippetPost } from '$apps/code-snippets';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.snippet.title} - Code Snippets - vdberg.dev</title>
</svelte:head>

<CodeSnippetPost snippet={data.snippet} />
