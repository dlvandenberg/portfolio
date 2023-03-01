<script lang="ts">
	import { About, Contact, Hero, Projects, WorkExperience } from '$apps/portfolio';
	import Section from '$lib/components/section.svelte';
	import Skills from '$lib/components/skills.svelte';
	import type { SkillIcon } from '$lib/model/skill-icon';
	import type { PageData } from './$types';

	export let data: PageData;

	const skills: SkillIcon[] = [
		{ name: 'Angular', icon: 'angular' },
		{ name: 'TypeScript', icon: 'typescript', prefix: 'vdb' },
		{ name: 'JavaScript', icon: 'js-square' },
		{ name: 'HTML', icon: 'html5' },
		{ name: 'CSS', icon: 'css3-alt' },
		{ name: 'Java', icon: 'java' },
	];

	const learning: SkillIcon[] = [
		{ name: 'Svelte', icon: 'svelte', prefix: 'vdb' },
		{ name: 'SvelteKit', icon: 'svelte', prefix: 'vdb' },
		{ name: 'SwiftUI', icon: 'swift' },
	];

	$: featuredProjects = data.projects?.filter((project) => project.featured) ?? [];
	$: regularProjects = data.projects?.filter((project) => !project.featured) ?? [];
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
	<Skills {skills} slot="outline-col" />
</Section>

<Section title="skills --learning" subtitle="(Hover to see the color)">
	<Skills skills={learning} slot="outline-col" />
</Section>

<Contact email={data.personalInfo.email} />
