<script lang="ts">
	import { About, Contact, Hero, Projects, WorkExperience } from '$apps/portfolio';
	import { Section, Skills } from '$lib/components';

	import type { SkillIcon } from '$lib/model/skill-icon';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	const skills: SkillIcon[] = [
		{ name: 'Angular', icon: 'angular' },
		{ name: 'TypeScript', icon: 'typescript', prefix: 'vdb' },
		{ name: 'JavaScript', icon: 'js-square' },
		{ name: 'HTML', icon: 'html5' },
		{ name: 'CSS', icon: 'css3-alt' },
		{ name: 'Java', icon: 'java' },
		{ name: 'Svelte', icon: 'svelte', prefix: 'vdb' },
		{ name: 'SvelteKit', icon: 'svelte', prefix: 'vdb' },
		{ name: 'SwiftUI', icon: 'swift' },
	];

	const learning: SkillIcon[] = [
		{ name: 'Go', icon: 'golang' },
		{ name: 'HTMX', icon: 'code', prefix: 'fas' },
	];

	let featuredProjects = $derived(data.projects?.filter((project) => project.featured) ?? []);
	let regularProjects = $derived(data.projects?.filter((project) => !project.featured) ?? []);
</script>

<svelte:head>
	<title>vdberg.dev - Personal Portfolio</title>
</svelte:head>

<Hero />
<About personalInfo={data.personalInfo} />
<WorkExperience workExperience={data.workExperience} />

{#if featuredProjects.length >= 1}
	<Projects title="projects --feat" projects={featuredProjects} featured />
{/if}
{#if regularProjects.length >= 1}
	<Projects title="projects" projects={regularProjects} />
{/if}

<Section title="skills" subtitle="(Hover to see the color)">
	{#snippet outlineCol()}
		<Skills {skills} />
	{/snippet}
</Section>

<Section title="skills --learning" subtitle="(Hover to see the color)">
	{#snippet outlineCol()}
		<Skills skills={learning} />
	{/snippet}
</Section>

<Contact email={data.personalInfo.email} />
