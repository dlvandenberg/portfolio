import type { Project } from '$lib/model/project';
import { render, screen } from '@testing-library/svelte';
import { describe, it } from 'vitest';
import Projects from './projects.svelte';

describe('Projects.svelte', () => {
	const title = 'Projects';
	const projectsWithOnlyRequiredFields: Project[] = [
		{
			title: 'Vitest project',
			description: 'A project made with vitest for unit testing',
			featured: false,
			skills: [],
		},
		{
			title: 'Unit test',
			description: 'Unit test project',
			featured: false,
			skills: [],
		},
	];

	it('should render title and projects', () => {
		const { container } = render(Projects, { title, projects: projectsWithOnlyRequiredFields });

		projectsWithOnlyRequiredFields.forEach((project) => {
			expect(screen.getByText(`_ ${project.title}`)).toBeInTheDocument();
			expect(screen.getByText(project.description)).toBeInTheDocument();
		});

		expect(container.querySelector('.project-link-container')).not.toBeInTheDocument();
		expect(container.querySelector('.project-link-container')).not.toBeInTheDocument();
		expect(container.querySelector('.project')).not.toHaveClass('featured');
	});

	it('should render a featured project', () => {
		const project = projectsWithOnlyRequiredFields[0];
		const { container } = render(Projects, { title, projects: [project], featured: true });
		expect(screen.getByText(`_ ${project.title}`)).toBeInTheDocument();
		expect(screen.getByText(project.description)).toBeInTheDocument();
		expect(container.querySelector('.project')).toHaveClass('featured');
	});

	it('should render a project with only a github link', () => {
		const project: Project = {
			title: 'Github Project',
			description: 'A project description',
			githubUrl: 'https://github.com',
			featured: false,
			skills: [],
		};
		const { container } = render(Projects, { title, projects: [project] });

		expect(screen.getByText(`_ ${project.title}`)).toBeInTheDocument();
		expect(screen.getByText(project.description)).toBeInTheDocument();
		expect(container.querySelector(`a[href='${project.githubUrl}']`)).toBeInTheDocument();
		expect(container.querySelectorAll('.project-link').length).toEqual(1);
	});

	it('should render a project with only a website link', () => {
		const project: Project = {
			title: 'Website Project',
			description: 'A project description',
			websiteUrl: 'https://website.com',
			featured: false,
			skills: [],
		};
		const { container } = render(Projects, { title, projects: [project] });

		expect(screen.getByText(`_ ${project.title}`)).toBeInTheDocument();
		expect(screen.getByText(project.description)).toBeInTheDocument();
		expect(container.querySelector(`a[href='${project.websiteUrl}']`)).toBeInTheDocument();
		expect(container.querySelectorAll('.project-link').length).toEqual(1);
	});

	it('should render a project with all link types', () => {
		const project: Project = {
			title: 'Github Project',
			description: 'A project description',
			githubUrl: 'https://github.com',
			websiteUrl: 'https://website.com',
			featured: false,
			skills: [],
		};
		const { container } = render(Projects, { title, projects: [project] });

		expect(screen.getByText(`_ ${project.title}`)).toBeInTheDocument();
		expect(screen.getByText(project.description)).toBeInTheDocument();
		expect(container.querySelector(`a[href='${project.githubUrl}']`)).toBeInTheDocument();
		expect(container.querySelector(`a[href='${project.websiteUrl}']`)).toBeInTheDocument();
		expect(container.querySelectorAll('.project-link').length).toEqual(2);
	});
});
