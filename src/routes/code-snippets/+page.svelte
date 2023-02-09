<script lang="ts">
	import ItemList from '$lib/components/item-list.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<title>Code Snippets - vdberg.dev - Personal Portfolio</title>
</svelte:head>

{#if data}
	<div class="wrapper -animate-fade-in">
		<ItemList title="code_snippets()" items={data.snippets} />
	</div>
{/if}
