<script lang="ts">
	import { CodeSnippetList } from '$apps/code-snippets';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<title>Code Snippets - vdberg.dev - Personal Portfolio</title>
</svelte:head>

{#if data}
	<CodeSnippetList snippets={data.snippets} />
{/if}
