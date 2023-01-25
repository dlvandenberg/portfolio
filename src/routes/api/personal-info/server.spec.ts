import { readFile } from '$lib/fs';
import { describe, vi } from 'vitest';
import { GET } from './+server';

describe('API: PersonalInfo', () => {
	vi.mock('$lib/fs', () => ({
		readFile: vi.fn(),
	}));

	vi.mock('@sveltejs/kit', () => ({
		json: vi
			.fn()
			.mockImplementation((obj) => Promise.resolve({ json: () => Promise.resolve(obj) })),
	}));

	const readFileMock = vi.mocked(readFile);

	it('should throw an error if info metadata cannot be parsed', async () => {
		readFileMock.mockResolvedValueOnce('Some content');

		let error: any;
		try {
			await GET();
		} catch (err) {
			error = err;
		} finally {
			expect(error).toBeTruthy();
			expect(error.message).toEqual('Could not extract Personal Information from file');
		}
	});

	it('should return a json response with PersonalInfo', async () => {
		const info = {
			firstName: 'Dennis',
			lastName: 'van den Berg',
			dateOfBirth: '2020-01-01',
			gender: 'Male',
			nationality: 'Dutch',
			email: 'vitest@test.com',
			married: true,
			kids: 0,
			content: '# This is a header\nSome content here',
		};
		const { firstName, lastName, dateOfBirth, gender, nationality, married, kids, email, content } =
			info;

		const fileContents = `---
firstName: ${firstName}
lastName: ${lastName}
dateOfBirth: ${dateOfBirth}
gender: ${gender}
nationality: ${nationality}
email: ${email}
married: ${married}
kids: ${kids}
---
${content}`;

		readFileMock.mockResolvedValueOnce(fileContents);

		const response = await GET();
		expect(response).toBeTruthy();
		expect(await response.json()).toEqual({
			...info,
			dateOfBirth: new Date(dateOfBirth),
		});
	});
});
