<script lang="ts">
	import Projects from '$lib/components/projects.svelte';
	import type { Project } from '$lib/model';

	export let projects: Project[] | undefined;
	$: featuredProjects = projects?.filter((project) => project.featured) ?? [];
	$: regularProjects = projects?.filter((project) => !project.featured) ?? [];
</script>

{#if featuredProjects.length >= 1}
	<Projects title="$ projects --feat" projects={featuredProjects} featured />
{/if}
{#if regularProjects.length >= 1}
	<Projects title="$ projects" projects={regularProjects} />
{/if}
