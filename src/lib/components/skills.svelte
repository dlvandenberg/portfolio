<script lang="ts">
	export let skills: string[] | undefined;
</script>

{#if skills && skills.length > 0}
	<div class="skill-list">
		{#each skills as skill}
			<div class="skill-list__item -{skill.toLowerCase()}">{skill}</div>
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

			&:hover {
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
