import { readFiles } from '$lib/fs';
import { describe, vi } from 'vitest';
import { GET } from './+server';

describe('API: WorkExperience', () => {
	vi.mock('$lib/fs', () => ({
		readFiles: vi.fn(),
	}));

	vi.mock('@sveltejs/kit', () => ({
		json: vi.fn().mockImplementation((obj) =>
			Promise.resolve({
				json: () => Promise.resolve(obj),
			}),
		),
	}));

	const readFilesMock = vi.mocked(readFiles);

	it('should throw an error if work data cannot be parsed', async () => {
		readFilesMock.mockResolvedValueOnce(['Some content']);

		let error: any;
		try {
			await GET();
		} catch (err) {
			error = err;
		} finally {
			expect(error).toBeTruthy();
			expect(error.message).toEqual('Could not extract Work information from file');
		}
	});

	it('should return a json response with WorkExperiences', async () => {
		const { name, company, jobTitle, dateFrom, tags, content } = {
			name: 'Vitest',
			company: 'IT Consultancy',
			jobTitle: 'Developer',
			dateFrom: '2023-01-01',
			tags: ['Unit', 'Test'],
			content: `# This is a header\nMarkdown files are awesome!`,
		};
		const fileContents = [
			`---
name: ${name}
company: ${company}
jobTitle: ${jobTitle}
dateFrom: ${dateFrom}
tags: [${tags}]
---
${content}`,
		];
		readFilesMock.mockResolvedValueOnce(fileContents);

		const response = await GET();
		expect(response).toBeTruthy();

		expect(await response.json()).toEqual([
			{
				name,
				company,
				jobTitle,
				dateFrom: new Date(dateFrom),
				tags,
				content,
			},
		]);
	});
});
