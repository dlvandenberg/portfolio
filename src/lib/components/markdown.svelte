<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import CodeRenderer from './code-renderer.svelte';

	export let source: string | undefined;
</script>

<SvelteMarkdown {source} renderers={{ code: CodeRenderer }} />
