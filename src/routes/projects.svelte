<script lang="ts">
	import Projects from '$lib/components/projects.svelte';
	import type { Project } from '$lib/model/project';

	const load = async (): Promise<Project[]> => {
		const response = await fetch('/api/projects/');
		return await response.json();
	};
</script>

{#await load() then projects}
	<Projects
		title="$ projects --feat"
		projects={projects.filter((project) => project.featured)}
		featured />
	<Projects title="$ projects" projects={projects.filter((project) => !project.featured)} />
{/await}
