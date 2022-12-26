<script lang="ts">
	import type { KnowingSkill, LearningSkill } from '$lib/model/skill';
	import Section from '$lib/section.svelte';
	import Skills from '$lib/skills.svelte';

	const knowingSkills: KnowingSkill[] = [
		{
			name: 'Angular',
			yearsExp: 4,
			colorCode: '#DD1B16',
		},
		{
			name: 'TypeScript',
			yearsExp: 4,
			colorCode: '#007ACC',
		},
		{
			name: 'JavaScript',
			yearsExp: 3,
			colorCode: '#F0DB4F',
		},
		{
			name: 'Java',
			yearsExp: 8,
			colorCode: '#F89820',
		},
		{
			name: 'HTML',
			yearsExp: 4,
			colorCode: '#E44D26',
		},
		{
			name: 'CSS',
			yearsExp: 4,
			colorCode: '#2965F1',
		},
		{
			name: 'Docker',
			yearsExp: 4,
			colorCode: '#0DB7ED',
		},
	];

	const learningSkills: LearningSkill[] = [
		{
			name: 'Svelte',
			colorCode: '#FF3E00',
			version: '3',
		},
		{
			name: 'SvelteKit',
			colorCode: '#FF3E00',
			version: '1.0.0',
		},
	];
</script>

<Section title="$ skills" subtitle="(Hover to see the color)">
	<Skills skills={knowingSkills} slot="outline-col" />
</Section>
<Section title="$ skills --learning" subtitle="(Hover to see the color)">
	<Skills skills={learningSkills} slot="outline-col" />
</Section>
