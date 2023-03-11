<script lang="ts">
	import { ItemList } from '$lib/components';
	import type { CodeSnippetLink } from '../../domain/model';

	export let snippets: CodeSnippetLink[];
</script>

{#if snippets.length > 0}
	<div class="wrapper -animate-fade-in">
		<ItemList title="code_snippets()" items={snippets} subtitle="Small and helpful code snippets" />
	</div>
{/if}
