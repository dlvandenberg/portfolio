<script lang="ts">
	import type { Project } from '$lib/model/project';
	import Projects from '$lib/projects.svelte';

	const projects: Project[] = [
		{
			title: 'PWRLifts',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dictum neque non rutrum accumsan. Nullam id neque ac mi interdum accumsan. Nulla eget orci lectus. Duis quis consectetur elit. Nulla vitae feugiat nibh. Praesent imperdiet metus vitae egestas varius. Etiam a fermentum dolor, et molestie dolor. Fusce placerat suscipit quam, in condimentum nulla pulvinar eget.',
			githubUrl: '',
			websiteUrl: 'https://pwr.devd.be',
			tags: [
				{
					name: 'Angular',
					colorCode: '#FF3E00',
				},
				{
					name: 'TypeScript',
					colorCode: '#007ACC',
				},
				{
					name: 'HTML',
					colorCode: '#E44D26',
				},
				{
					name: 'CSS',
					colorCode: '#2965F1',
				},
			],
		},
		{
			title: 'LeaseCalc',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dictum neque non rutrum accumsan. Nullam id neque ac mi interdum accumsan. Nulla eget orci lectus. Duis quis consectetur elit. Nulla vitae feugiat nibh. Praesent imperdiet metus vitae egestas varius. Etiam a fermentum dolor, et molestie dolor. Fusce placerat suscipit quam, in condimentum nulla pulvinar eget.',
			githubUrl: 'https://github.com/dlvandenberg/devdbe-leasecalc',
			websiteUrl: 'https://lease.devd.be',
			tags: [
				{
					name: 'Angular',
					colorCode: '#FF3E00',
				},
				{
					name: 'TypeScript',
					colorCode: '#007ACC',
				},
				{
					name: 'HTML',
					colorCode: '#E44D26',
				},
				{
					name: 'CSS',
					colorCode: '#2965F1',
				},
			],
		},
	];
</script>

<Projects title="$ projects" {projects} />
