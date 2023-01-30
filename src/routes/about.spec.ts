import { formatDate } from '$lib/date';
import type { PersonalInfo } from '$lib/model';
import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import About from './about.svelte';

describe('About.svelte', () => {
	const testIds = {
		personalInfo: 'personalInfo',
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

		render(About, { personalInfo: info });
		expect(screen.getByText('$ whoami')).toBeInTheDocument();
		expect(screen.getByText(`"${info.firstName}"`)).toBeInTheDocument();
		expect(screen.getByText(`"${info.lastName}"`)).toBeInTheDocument();
		expect(screen.getByText(`"${formatDate(info.dateOfBirth)}"`)).toBeInTheDocument();
		expect(screen.getByText(`"${info.gender}"`)).toBeInTheDocument();
		expect(screen.getByText(`"${info.email}"`)).toBeInTheDocument();
		expect(screen.getByText(`"${info.nationality}"`)).toBeInTheDocument();
		expect(screen.getByText(`${info.kids}`)).toBeInTheDocument();
		expect(screen.getByText(`${info.married}`)).toBeInTheDocument();
		expect(screen.getByText(info.content)).toBeInTheDocument();
	});

	it('should render nothing when personalInfo is undefined', () => {
		render(About, { personalInfo: undefined as unknown as PersonalInfo });
		expect(screen.queryByTestId(testIds.personalInfo)).not.toBeInTheDocument();
	});
});
