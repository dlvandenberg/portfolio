<script lang="ts">
	import type { KnowingSkill, LearningSkill, Skill } from './model/skill';

	export let skills: Skill[] | KnowingSkill[] | LearningSkill[];
</script>

<div class="skill-items">
	{#each skills as skill}
		<div class="skill-item" style="--color: {skill.colorCode};">{skill.name}</div>
	{/each}
</div>

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
		color: $color-sand-100;

		&:hover {
			background-color: var(--color);
			color: $color-coffee;
		}
	}

	@media (min-width: $md-breakpoint) {
		.skill-item {
			font-size: small;
			font-weight: 300;
		}
	}
</style>
