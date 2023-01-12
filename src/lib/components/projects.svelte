<script lang="ts">
	import { faGithub } from '@fortawesome/free-brands-svg-icons';
	import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa/src/fa.svelte';
	import SvelteMarkdown from 'svelte-markdown';
	import type { Project } from '../model/project';
	import Skills from './skills.svelte';

	export let projects: Project[];
	export let title: string;
	export let featured = false;
</script>

<div class="projects-container g-container">
	<h1 class="projects-title">{title}</h1>
	<div class="projects-list">
		{#each projects as project}
			<div class="project" class:featured>
				<h2 class="project-title">_ {project.title}</h2>
				{#if project.githubUrl || project.websiteUrl}
					<div class="project-link-container">
						{#if project.githubUrl}
							<a href={project.githubUrl} class="project-link"><Fa icon={faGithub} /></a>
						{/if}
						{#if project.websiteUrl}
							<a href={project.websiteUrl} class="project-link"
								><Fa icon={faArrowUpRightFromSquare} /></a>
						{/if}
					</div>
				{/if}
				<div class="project-description md-wrapper">
					<SvelteMarkdown source={project.description} />
				</div>
				<div class="project-tags">
					<h2 class="project-tags-title">_ tags</h2>
					<Skills skills={project.skills} />
				</div>
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	$project-gap: 1rem;
	.projects-container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.projects-title {
		font-weight: 100;
		font-size: x-large;
		color: $color-sand-100;
		margin-bottom: 0.5rem;

		&::first-letter {
			color: $color-sand-500;
		}
	}

	.projects-list {
		margin-bottom: 3rem;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: stretch;
		justify-content: center;
		gap: $project-gap;
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

		&.featured {
			background-color: $color-sand-500;
			max-width: $md-breakpoint;

			.project-title,
			.project-tags-title {
				color: $color-coffee;
			}
		}
	}

	.project-link-container {
		position: absolute;
		top: 1rem;
		right: 1rem;
	}

	.project-title {
		font-weight: 100;
		font-size: large;
		text-transform: uppercase;
		margin-bottom: 0.5rem;
		color: $color-sand-100;

		&::first-letter {
			color: $color-yellow;
		}
	}

	.project-description {
		margin-bottom: 1rem;
	}

	.project-tags-title {
		font-weight: 100;
		font-size: medium;
		color: $color-sand-100;

		&::first-letter {
			color: $color-yellow;
		}
	}

	@media (min-width: $md-breakpoint) {
		.project-description {
			font-size: small;
			font-weight: 300;
		}

		.project.featured {
			max-width: calc(($md-breakpoint - $project-gap) / 2);
		}

		.project {
			width: calc(($md-breakpoint - $project-gap) / 2);
		}
	}
</style>
