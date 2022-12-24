<script lang="ts">
	import Section from '$lib/section.svelte';

	type Skill = {
		name: string;
		colorCode: string;
	};

	type KnowingSkill = Skill & {
		yearsExp: number;
	};

	type LearningSkill = Skill & {
		version: string;
	};

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
	<div slot="outline-col" class="skill-items">
		{#each knowingSkills as skill}
			<div class="skill-item" style="--color: {skill.colorCode};">{skill.name}</div>
		{/each}
	</div>
</Section>
<Section title="$ skills --learning" subtitle="(Hover to see the color)">
	<div slot="outline-col" class="skill-items">
		{#each learningSkills as skill}
			<div class="skill-item" style="--color: {skill.colorCode};">{skill.name}</div>
		{/each}
	</div>
</Section>

<style lang="scss">
	.skill-items {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.skill-item {
		background-color: $color-coffee;
		border: 1px solid $color-sand-100;
		padding: 0.5rem;
		margin: 0.5rem;
		cursor: pointer;
		transition: 0.2s;

		&:hover {
			background-color: var(--color);
			color: $color-coffee;
		}
	}
</style>
