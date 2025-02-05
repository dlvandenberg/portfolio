<script lang="ts">
	interface Props {
		component: any;
		data: any;
	}

	let { component, data }: Props = $props();

	const SvelteComponent = $derived(component);
</script>

<SvelteComponent tabData={data}>
	{#snippet children({ activeTab })}
	
			<h1>{activeTab.title}</h1>
			<p>{activeTab.description}</p>
		
	{/snippet}
</SvelteComponent>
