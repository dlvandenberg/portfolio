<script lang="ts">
	import Projects from '$lib/components/projects.svelte';
	import type { Project } from '$lib/model/project';

	export let projects: Project[];
</script>

<Projects title="$ projects" {projects} />
