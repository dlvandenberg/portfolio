import type { Work } from '$lib/model';
import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import WorkExperience from './work-experience.svelte';

describe('WorkExperience.svelte', () => {
	it('should not render anything if workExperience list is empty', () => {
		const { container } = render(WorkExperience, { workExperience: [] });
		expect(container.querySelector('.tabs-container')).not.toBeInTheDocument();
	});

	it('should not render anything if workExperience list is undefined', () => {
		const { container } = render(WorkExperience, { workExperience: undefined });
		expect(container.querySelector('.tabs-container')).not.toBeInTheDocument();
	});

	it('should render workExperience with dateTo undefined and empty skills', () => {
		const workExperienceList: Work[] = [
			{
				name: 'Vitest',
				dateFrom: '2023-01-01',
				description: 'Unit testing',
				company: 'Tester',
				jobTitle: 'Tester',
				skills: [],
			},
		];

		render(WorkExperience, { workExperience: workExperienceList });
		const [job] = workExperienceList;
		expect(screen.getByText(job.jobTitle)).toBeInTheDocument();
		expect(screen.getByText(`@ ${job.company}`)).toBeInTheDocument();
		expect(screen.getByText(`${job.dateFrom} - Present`)).toBeInTheDocument();
		expect(screen.getByText('_ description')).toBeInTheDocument();
		expect(screen.getByText(job.description)).toBeInTheDocument();
		expect(screen.queryByText('_ tags')).not.toBeInTheDocument();
	});

	it('should render workExperience with dateTo', () => {
		const workExperienceList: Work[] = [
			{
				name: 'Vitest',
				dateFrom: '2023-01-01',
				dateTo: '2023-10-10',
				description: 'Unit testing',
				company: 'Tester',
				jobTitle: 'Tester',
				skills: [],
			},
		];

		render(WorkExperience, { workExperience: workExperienceList });
		const [job] = workExperienceList;
		expect(screen.getByText(`${job.dateFrom} - ${job.dateTo}`)).toBeInTheDocument();
	});
});
