<script lang="ts">
	import About from './about.svelte';
	import Contact from './contact.svelte';
	import type { HomeData } from './data';
	import FeaturedProjects from './featured-projects.svelte';
	import Hero from './hero.svelte';
	import Projects from './projects.svelte';
	import Skills from './skills.svelte';
	import Work from './work.svelte';

	export let data: HomeData;
</script>

<Hero />
{#if data.person}
	<About person={data.person} />
{/if}
{#if data.workExperience}
	<Work workExperience={data.workExperience} />
{/if}
{#if data.featuredProject}
	<FeaturedProjects featuredProjects={[data.featuredProject]} />
{/if}
{#if data.projects}
	<Projects projects={data.projects} />
{/if}
{#if data.skills && data.learningSkills}
	<Skills knowing={data.skills} learning={data.learningSkills} />
{/if}
<Contact />
