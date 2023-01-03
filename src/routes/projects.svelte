<script lang="ts">
	import Projects from '$lib/components/projects.svelte';
	import type { Project } from '$lib/model';

	export let projects: Project[];
</script>

{#if projects}
	<Projects
		title="$ projects --feat"
		projects={projects.filter((project) => project.featured)}
		featured />
	<Projects title="$ projects" projects={projects.filter((project) => !project.featured)} />
{/if}
