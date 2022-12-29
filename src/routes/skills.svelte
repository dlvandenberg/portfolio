<script lang="ts">
	import Section from '$lib/components/section.svelte';
	import Skills from '$lib/components/skills.svelte';
	import type { KnowingSkill, LearningSkill } from '$lib/model/skill';

	export let knowing: KnowingSkill[];

	export let learning: LearningSkill[];
</script>

<Section title="$ skills" subtitle="(Hover to see the color)">
	<Skills skills={knowing} slot="outline-col" />
</Section>
<Section title="$ skills --learning" subtitle="(Hover to see the color)">
	<Skills skills={learning} slot="outline-col" />
</Section>
