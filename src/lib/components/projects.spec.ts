import type { Project } from '$lib/model';
import { render, screen } from '@testing-library/svelte';
import { describe, it } from 'vitest';
import Projects from './projects.svelte';

describe('Projects.svelte', () => {
	const featuredClass = '-featured';

	const testIds = {
		projects: 'projects',
		project: 'project',
		projectLink: 'project-link',
		projectGithubLink: 'project-github-url',
		projectSiteLink: 'project-website-url',
		projectTags: 'project-tags',
	};

	it('should not render anything when projectlist is undefined', () => {
		render(Projects, { projects: undefined, title: 'Vitest project' });
		expect(screen.queryByTestId(testIds.projects)).not.toBeInTheDocument();
	});

	it('should not render anything when projectlist is empty', () => {
		render(Projects, { projects: [], title: 'Vitest project' });
		expect(screen.queryByTestId(testIds.projects)).not.toBeInTheDocument();
	});

	it('should render title and minimal projects', () => {
		const title = 'Projects';
		const projects: Project[] = [
			{
				title: 'Vitest',
				content: 'Unit test framework',
				featured: false,
			},
			{
				title: 'SvelteKit',
				content: 'Some content',
				featured: false,
			},
		];

		render(Projects, { projects, title });

		expect(screen.getByText(title)).toBeInTheDocument();
		projects.forEach((project) => {
			expect(screen.getByText(`_ ${project.title}`)).toBeInTheDocument();
			expect(screen.getByText(project.content)).toBeInTheDocument();
		});
		expect(screen.queryByTestId(testIds.projectTags)).not.toBeInTheDocument();
		expect(screen.queryByTestId(testIds.projectLink)).not.toBeInTheDocument();
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

		render(Projects, { projects: [project], title });

		expect(screen.getByTestId(testIds.projectGithubLink)).toHaveAttribute(
			'href',
			project.githubUrl,
		);
		expect(screen.getByTestId(testIds.projectSiteLink)).toHaveAttribute('href', project.websiteUrl);
		expect(screen.getByTestId(testIds.projectTags)).toBeInTheDocument();
	});

	it('should render a featured project', () => {
		const title = 'Projects';
		const project: Project = {
			title: 'Vitest',
			content: '# Header\nSample Markdown',
			featured: false,
		};

		render(Projects, { projects: [project], title, featured: true });
		expect(screen.getByTestId(testIds.project)).toHaveClass(featuredClass);
	});
});
