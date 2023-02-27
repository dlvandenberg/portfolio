<script lang="ts">
	import ItemList from '$lib/ui/item-list.svelte';
	import type { CodeSnippetLink } from '../../domain/model';

	export let snippets: CodeSnippetLink[];
</script>

{#if snippets.length > 0}
	<div class="wrapper -animate-fade-in">
		<ItemList title="code_snippets()" items={snippets} />
	</div>
{/if}
