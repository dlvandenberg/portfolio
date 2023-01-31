<script lang="ts">
	import type { SkillIcon } from '$lib/model/skill-icon';
	import { isSkillIcon } from '$lib/type-guard/skill-icon';
	import type { IconName, IconPrefix } from '@fortawesome/free-brands-svg-icons';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';

	export let skills: string[] | SkillIcon[] | undefined;

	const skillName = (skill: string | SkillIcon) => (isSkillIcon(skill) ? skill.name : skill);

	const getIconDefinition = (skill: SkillIcon): [IconPrefix, IconName] => {
		// Force cast to IconPrefix and IconName
		return [(skill.prefix as unknown as IconPrefix) ?? 'fab', skill.icon as unknown as IconName];
	};
</script>

{#if skills && skills.length > 0}
	<div data-testid="skill-list" class="skill-list">
		{#each skills as skill}
			<div data-testid="skill-item" class="skill-list__item -{skillName(skill).toLowerCase()}">
				{#if isSkillIcon(skill)}
					<FontAwesomeIcon icon={getIconDefinition(skill)} size={'2x'} />
				{/if}
				{skillName(skill)}
			</div>
		{/each}
	</div>
{/if}

<style lang="scss">
	.skill-list {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;

		&__item {
			background-color: $color-coffee;
			border: 1px solid $color-sand-100;
			padding: 0.5rem;
			margin: 0.5rem;
			cursor: pointer;
			transition: 0.2s;
			color: $color-sand-100;

			display: inline-flex;
			gap: 0.5rem;
			align-items: center;

			&:hover {
				background-color: $color-sand-500;
				color: $color-coffee;

				&.-angular {
					background-color: $color-angular;
				}

				&.-css {
					background-color: $color-css;
				}

				&.-html {
					background-color: $color-html;
				}

				&.-java {
					background-color: $color-java;
				}

				&.-javascript {
					background-color: $color-javascript;
				}

				&.-swiftui {
					background-color: $color-swiftui;
				}

				&.-svelte {
					background-color: $color-svelte;
				}

				&.-sveltekit {
					background-color: $color-sveltekit;
				}

				&.-typescript {
					background-color: $color-typescript;
				}
			}
		}
	}
	@media (min-width: $md-breakpoint) {
		.skill-list {
			&__item {
				font-size: small;
				font-weight: 300;
			}
		}
	}
</style>
