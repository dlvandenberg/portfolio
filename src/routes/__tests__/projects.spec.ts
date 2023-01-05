import type { Project } from '$lib/model';
import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Projects from '../projects.svelte';

describe('Projects.svelte', () => {
	it('should render featured and normal projects', () => {
		const projects: Project[] = [
			{
				title: 'Vitest',
				description: 'Unit testing',
				featured: true,
				skills: [],
			},
			{
				title: 'SvelteKit',
				description: 'Full framework',
				featured: false,
				skills: [],
			},
		];

		render(Projects, { projects });
		expect(screen.getByText('$ projects --feat')).toBeInTheDocument();
		expect(screen.getByText('$ projects')).toBeInTheDocument();
	});

	it('should not render anything if projectlist is undefined', () => {
		const { container } = render(Projects, { projects: undefined });
		expect(container.querySelector('.projects-container')).not.toBeInTheDocument();
	});

	it('should not render anything if projectlist is empty', () => {
		const { container } = render(Projects, { projects: [] });
		expect(container.querySelector('.projects-container')).not.toBeInTheDocument();
	});
});
