<script lang="ts">
	import Section from '$lib/components/section.svelte';
	import Skills from '$lib/components/skills.svelte';
	import type { Skill } from '$lib/model/skill';

	export let skills: Skill[] | undefined;
	$: knownSkills = skills?.filter((skill) => !skill.learning) ?? [];
	$: learningSkills = skills?.filter((skill) => skill.learning) ?? [];
</script>

{#if knownSkills.length >= 1}
	<Section title="$ skills" subtitle="(Hover to see the color)">
		<Skills skills={knownSkills} slot="outline-col" />
	</Section>
{/if}
{#if learningSkills.length >= 1}
	<Section title="$ skills --learning" subtitle="(Hover to see the color)">
		<Skills skills={learningSkills} slot="outline-col" />
	</Section>
{/if}
