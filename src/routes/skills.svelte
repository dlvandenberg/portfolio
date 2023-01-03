<script lang="ts">
	import Section from '$lib/components/section.svelte';
	import Skills from '$lib/components/skills.svelte';
	import type { Skill } from '$lib/model/skill';

	const load = async (): Promise<Skill[]> => {
		const response = await fetch('/api/skills/');
		return await response.json();
	};
</script>

{#await load() then skills}
	<Section title="$ skills" subtitle="(Hover to see the color)">
		<Skills skills={skills.filter((skill) => !skill.learning)} slot="outline-col" />
	</Section>
	<Section title="$ skills --learning" subtitle="(Hover to see the color)">
		<Skills skills={skills.filter((skill) => skill.learning)} slot="outline-col" />
	</Section>
{/await}
