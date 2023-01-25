import type { Project } from '$lib/model';
import { render, screen } from '@testing-library/svelte';
import { describe, it } from 'vitest';
import Projects from './projects.svelte';

describe('Projects.svelte', () => {
	const featuredClass = '-featured';

	const selectors = {
		projects: '.projects',
		projectsTitle: '.projects__title',
		project: '.project',
		projectTitle: '.project__title',
		projectLink: '.project__link',
		projectDescription: '.project__description',
		projectTags: '.project__tags',
	};

	it('should not render anything when projectlist is undefined', () => {
		const { container } = render(Projects, { projects: undefined, title: 'Vitest project' });
		expect(container.querySelector(selectors.projects)).not.toBeInTheDocument();
	});

	it('should not render anything when projectlist is empty', () => {
		const { container } = render(Projects, { projects: [], title: 'Vitest project' });
		expect(container.querySelector(selectors.projects)).not.toBeInTheDocument();
	});

	it('should render title and minimal projects', () => {
		const title = 'Projects';
		const projects: Project[] = [
			{
				title: 'Vitest',
				content: '# Header\nSample Markdown',
				featured: false,
			},
			{
				title: 'SvelteKit',
				content: 'Some content',
				featured: false,
			},
		];

		const { container } = render(Projects, { projects, title });
		expect(container.querySelector(selectors.projectsTitle)?.textContent).toEqual(title);
		expect(container.querySelectorAll(selectors.projectTitle)).toHaveLength(projects.length);
		Array.from(container.querySelectorAll(selectors.project)).every((project) =>
			expect(project).not.toHaveClass(featuredClass),
		);

		projects.forEach((project) => {
			expect(screen.getByText(`_ ${project.title}`)).toBeInTheDocument();
		});

		expect(container.querySelector(selectors.projectTags)).not.toBeInTheDocument();
		expect(container.querySelector(selectors.projectLink)).not.toBeInTheDocument();
	});

	it('should render full project', () => {
		const title = 'Projects';
		const project: Project = {
			title: 'Vitest',
			content: '# Header\nSample Markdown',
			featured: false,
			githubUrl: 'https://url.com',
			websiteUrl: 'https://site.com',
			tags: ['Unit', 'Test'],
		};

		const { container } = render(Projects, { projects: [project], title });
		expect(container.querySelectorAll(selectors.projectLink)).toHaveLength(2);
		expect(container.querySelector(`a[href="${project.githubUrl}"]`)).toBeInTheDocument();
		expect(container.querySelector(`a[href="${project.websiteUrl}"]`)).toBeInTheDocument();
		expect(container.querySelector(selectors.projectTags)).toBeInTheDocument();
	});

	it('should render a featured project', () => {
		const title = 'Projects';
		const project: Project = {
			title: 'Vitest',
			content: '# Header\nSample Markdown',
			featured: false,
		};

		const { container } = render(Projects, { projects: [project], title, featured: true });
		expect(container.querySelector(selectors.project)).toHaveClass(featuredClass);
	});
});
