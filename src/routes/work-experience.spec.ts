import { formatDate } from '$lib/date';
import type { Work } from '$lib/model';
import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import WorkExperience from './work-experience.svelte';

describe('WorkExperience.svelte', () => {
	const testIds = {
		job: 'job',
	};

	it('should not render anything if workExperience list is empty', () => {
		render(WorkExperience, { workExperience: [] });

		expect(screen.queryByTestId(testIds.job)).not.toBeInTheDocument();
	});

	it('should not render anything if workExperience list is undefined', () => {
		render(WorkExperience, { workExperience: undefined });
		expect(screen.queryByTestId(testIds.job)).not.toBeInTheDocument();
	});

	it('should render workExperience with dateTo undefined and empty tags', () => {
		const workExperienceList: Work[] = [
			{
				name: 'Vitest',
				dateFrom: '2023-01-01',
				content: 'Unit testing',
				company: 'Tester',
				jobTitle: 'Tester',
				tags: [],
			},
		];
		const [job] = workExperienceList;

		render(WorkExperience, { workExperience: workExperienceList });

		expect(screen.getByText(job.jobTitle)).toBeInTheDocument();
		expect(screen.getByText(`@ ${job.company}`)).toBeInTheDocument();
		expect(screen.getByText(`${formatDate(job.dateFrom)} - Present`)).toBeInTheDocument();
		expect(screen.getByText('_ description')).toBeInTheDocument();
		expect(screen.getByText(job.content)).toBeInTheDocument();
		expect(screen.queryByText('_ tags')).not.toBeInTheDocument();
	});

	it('should render workExperience with dateTo', () => {
		const workExperienceList: Work[] = [
			{
				name: 'Vitest',
				dateFrom: '2023-01-01T00:00:00',
				dateTo: '2023-10-10T00:00:00',
				content: 'Unit testing',
				company: 'Tester',
				jobTitle: 'Tester',
				tags: [],
			},
		];
		const [job] = workExperienceList;

		render(WorkExperience, { workExperience: workExperienceList });

		expect(
			screen.getByText(`${formatDate(job.dateFrom)} - ${formatDate(job.dateTo)}`),
		).toBeInTheDocument();
	});
});
