<script lang="ts">
	import type { Project } from '$lib/model/project';
	import Projects from '$lib/projects.svelte';

	export let projects: Project[];
</script>

<Projects title="$ projects" {projects} />
