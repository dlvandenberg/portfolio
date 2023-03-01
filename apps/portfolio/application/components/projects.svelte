<script lang="ts">
	import { Markdown, Skills } from '$lib/components';
	import { faGithub } from '@fortawesome/free-brands-svg-icons';
	import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import type { Project } from '../../domain/model';

	export let projects: Project[] | undefined;
	export let title: string;
	export let featured = false;
</script>

{#if projects && projects.length > 0}
	<div data-testid="projects" class="projects g-container">
		<h1 data-testid="projects-title" class="projects__title">{title}</h1>
		<div class="projects__list">
			{#each projects as project}
				<div data-testid="project" class="project" class:-featured={featured}>
					<h2 data-testid="project-title" class="project__title">_ {project.title}</h2>
					{#if project.githubUrl || project.websiteUrl}
						<div class="project__links">
							{#if project.githubUrl}
								<a data-testid="project-github-url" href={project.githubUrl} class="project__link">
									<FontAwesomeIcon icon={faGithub} />
								</a>
							{/if}
							{#if project.websiteUrl}
								<a
									data-testid="project-website-url"
									href={project.websiteUrl}
									class="project__link">
									<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
								</a>
							{/if}
						</div>
					{/if}
					<div data-testid="project-description" class="project__description md-wrapper">
						<Markdown source={project.content} />
					</div>
					{#if project.tags && project.tags.length > 0}
						<div data-testid="project-tags" class="project__tags">
							<h2 class="project__tags-title">_ tags</h2>
							<Skills skills={project.tags} />
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
{/if}

<style lang="scss">
	$project-gap: 1rem;
	.projects {
		display: flex;
		flex-direction: column;
		align-items: center;

		&__title {
			@include dollar-title;
		}

		&__list {
			margin-bottom: 3rem;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			align-items: stretch;
			justify-content: center;
			gap: $project-gap;
		}
	}

	.project {
		border: 1px solid $color-sand-100;
		padding: 1rem;
		margin-bottom: 1rem;
		background-color: $color-coffee;
		position: relative;
		transition: transform $transition-duration ease-in-out;

		&:hover {
			transform: translateY(-0.5rem);
		}

		&.-featured {
			background-color: $color-sand-500;
			max-width: $md-breakpoint;

			.project__title,
			.project__tags-title {
				color: $color-coffee;
			}
		}

		&__title {
			font-weight: 100;
			font-size: large;
			text-transform: uppercase;
			margin-bottom: 0.5rem;
			color: $color-sand-100;

			&::first-letter {
				color: $color-yellow;
			}
		}

		&__links {
			position: absolute;
			top: 1rem;
			right: 1rem;
		}

		&__description {
			margin-bottom: 1rem;
		}

		&__tags-title {
			font-weight: 100;
			font-size: medium;
			color: $color-sand-100;

			&::first-letter {
				color: $color-yellow;
			}
		}
	}
	@media (min-width: $md-breakpoint) {
		.project {
			width: calc(($md-breakpoint - $project-gap) / 2);

			&.-featured {
				max-width: $md-breakpoint;
				width: $md-breakpoint;
			}

			&__description {
				font-size: small;
				font-weight: 300;
			}
		}
	}
</style>
