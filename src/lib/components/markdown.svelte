<script lang="ts">
	import SvelteMarkdown from '@humanspeak/svelte-markdown';
	import CodeRenderer from './code-renderer.svelte';

	interface Props {
		source: string | undefined;
	}

	let { source }: Props = $props();
</script>

<SvelteMarkdown {source} renderers={{ code: CodeRenderer }} />
