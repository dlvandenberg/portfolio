<script lang="ts">
	import ItemList from '$lib/components/item-list.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<title>Code Snippets</title>
</svelte:head>

{#if data}
	<!-- <Section title="$ code_snippets">
		<svelte:fragment slot="outline-col">
			<SvelteMarkdown source={data.snippets[0]?.content} />
		</svelte:fragment>
	</Section> -->

	<ItemList title="$ code_snippets()" items={data.snippets} />
{/if}
