<script lang="ts">
	import type { PageData } from './$types';
	import About from './about.svelte';
	import Contact from './contact.svelte';
	import Hero from './hero.svelte';
	import Projects from './projects.svelte';
	import Skills from './skills.svelte';
	import WorkExperience from './work-experience.svelte';

	export let data: PageData;
</script>

<Hero />
<About personalInfo={data.personalInfo} />
<WorkExperience workExperience={data.workExperience} />
<Projects projects={data.projects} />
<Skills skills={data.skills} />
<Contact contactInfo={data.contactInfo} />
