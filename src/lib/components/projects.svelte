<script lang="ts">
	import { faGithub } from '@fortawesome/free-brands-svg-icons';
	import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa/src/fa.svelte';
	import SvelteMarkdown from 'svelte-markdown';
	import type { Project } from '../model/project';
	import Skills from './skills.svelte';

	export let projects: Project[] | undefined;
	export let title: string;
	export let featured = false;
</script>

{#if projects && projects.length > 0}
	<div class="projects g-container">
		<h1 class="projects__title">{title}</h1>
		<div class="projects__list">
			{#each projects as project}
				<div class="project {featured ? '-featured' : ''}">
					<h2 class="project__title">_ {project.title}</h2>
					{#if project.githubUrl || project.websiteUrl}
						<div class="project__links">
							{#if project.githubUrl}
								<a href={project.githubUrl} class="project__link"><Fa icon={faGithub} /></a>
							{/if}
							{#if project.websiteUrl}
								<a href={project.websiteUrl} class="project__link"
									><Fa icon={faArrowUpRightFromSquare} /></a>
							{/if}
						</div>
					{/if}
					<div class="project__description md-wrapper">
						<SvelteMarkdown source={project.content} />
					</div>
					{#if project.tags && project.tags.length > 0}
						<div class="project__tags">
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
			font-weight: 100;
			font-size: x-large;
			color: $color-sand-100;
			margin-bottom: 0.5rem;

			&::first-letter {
				color: $color-sand-500;
			}
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
