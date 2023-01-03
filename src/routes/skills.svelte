<script lang="ts">
	import Section from '$lib/components/section.svelte';
	import Skills from '$lib/components/skills.svelte';
	import type { Skill } from '$lib/model/skill';

	export let skills: Skill[];
</script>

{#if skills}
	<Section title="$ skills" subtitle="(Hover to see the color)">
		<Skills skills={skills.filter((skill) => !skill.learning)} slot="outline-col" />
	</Section>
	<Section title="$ skills --learning" subtitle="(Hover to see the color)">
		<Skills skills={skills.filter((skill) => skill.learning)} slot="outline-col" />
	</Section>
{/if}
