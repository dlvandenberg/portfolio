<script lang="ts">
	import type { Project } from '$lib/model/project';
	import Projects from '$lib/projects.svelte';

	const featuredProjects: Project[] = [
		{
			title: 'Portfolio website',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dictum neque non rutrum accumsan. Nullam id neque ac mi interdum accumsan. Nulla eget orci lectus. Duis quis consectetur elit. Nulla vitae feugiat nibh. Praesent imperdiet metus vitae egestas varius. Etiam a fermentum dolor, et molestie dolor. Fusce placerat suscipit quam, in condimentum nulla pulvinar eget.',
			githubUrl: '',
			websiteUrl: 'https://www.devd.be',
			tags: [
				{
					name: 'Svelte',
					colorCode: '#FF3E00',
				},
				{
					name: 'SvelteKit',
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

<Projects title="$ projects --feat" projects={featuredProjects} featured />
