<script lang="ts">
	import Projects from '$lib/components/projects.svelte';
	import type { Project } from '$lib/model/project';

	export let featuredProjects: Project[];
</script>

<Projects title="$ projects --feat" projects={featuredProjects} featured />
