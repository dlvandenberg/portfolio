import type { PersonalInfo } from '$lib/model';
import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import About from './about.svelte';

describe('About.svelte', () => {
	const selectors = {
		wrapper: '.wrapper',
	};

	it('should render personal info', () => {
		const info: PersonalInfo = {
			firstName: 'Dennis',
			lastName: 'van den Berg',
			dateOfBirth: '1989-10-14T00:00:00.000Z',
			content: 'Vitest',
			email: 'dennis@vdberg.dev',
			gender: 'Male',
			kids: 2,
			married: true,
			nationality: 'Dutch',
		};

		const formattedDate = new Date(info.dateOfBirth).toLocaleDateString('en-US');

		render(About, { personalInfo: info });
		expect(screen.getByText('$ whoami')).toBeInTheDocument();
		expect(screen.getByText(`"${info.firstName}"`)).toBeInTheDocument();
		expect(screen.getByText(`"${info.lastName}"`)).toBeInTheDocument();
		expect(screen.getByText(`"${formattedDate}"`)).toBeInTheDocument();
		expect(screen.getByText(`"${info.gender}"`)).toBeInTheDocument();
		expect(screen.getByText(`"${info.email}"`)).toBeInTheDocument();
		expect(screen.getByText(`"${info.nationality}"`)).toBeInTheDocument();
		expect(screen.getByText(`${info.kids}`)).toBeInTheDocument();
		expect(screen.getByText(`${info.married}`)).toBeInTheDocument();
		expect(screen.getByText(info.content)).toBeInTheDocument();
	});

	it('should render nothing when prop is undefined', () => {
		const { container } = render(About, { personalInfo: undefined as unknown as PersonalInfo });
		expect(container.querySelector(selectors.wrapper)).not.toBeInTheDocument();
	});
});
