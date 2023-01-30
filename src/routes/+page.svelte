<script lang="ts">
	import Projects from '$lib/components/projects.svelte';
	import Section from '$lib/components/section.svelte';
	import Skills from '$lib/components/skills.svelte';
	import type { PageData } from './$types';
	import About from './about.svelte';
	import Contact from './contact.svelte';
	import Hero from './hero.svelte';
	import WorkExperience from './work-experience.svelte';

	export let data: PageData;

	const skills = ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Java'];
	const learning = ['Svelte', 'SvelteKit', 'SwiftUI'];

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
	<Projects title="$ projects --feat" projects={featuredProjects} featured />
{/if}
{#if regularProjects.length >= 1}
	<Projects title="$ projects" projects={regularProjects} />
{/if}

<Section title="$ skills" subtitle="(Hover to see the color)">
	<Skills {skills} slot="outline-col" />
</Section>

<Section title="$ skills --learning" subtitle="(Hover to see the color)">
	<Skills skills={learning} slot="outline-col" />
</Section>

<Contact email={data.personalInfo.email} />
