<script lang="ts">
	import type { KnowingSkill, LearningSkill } from '$lib/model/skill';
	import Section from '$lib/section.svelte';
	import Skills from '$lib/skills.svelte';

	export let knowing: KnowingSkill[];

	export let learning: LearningSkill[];
</script>

<Section title="$ skills" subtitle="(Hover to see the color)">
	<Skills skills={knowing} slot="outline-col" />
</Section>
<Section title="$ skills --learning" subtitle="(Hover to see the color)">
	<Skills skills={learning} slot="outline-col" />
</Section>
