<script lang="ts">
	export let component: any;
	export let data: any;
</script>

<svelte:component this={component} tabData={data}>
	<svelte:fragment let:activeTab>
		<h1>{activeTab.title}</h1>
		<p>{activeTab.description}</p>
	</svelte:fragment>
</svelte:component>
