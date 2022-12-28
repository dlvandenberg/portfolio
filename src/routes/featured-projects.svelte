<script lang="ts">
	import type { Project } from '$lib/model/project';
	import Projects from '$lib/projects.svelte';

	export let featuredProjects: Project[];
</script>

<Projects title="$ projects --feat" projects={featuredProjects} featured />
