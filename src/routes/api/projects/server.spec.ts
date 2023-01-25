import { readFiles } from '$lib/fs';
import { describe, vi } from 'vitest';
import { GET } from './+server';

describe('API: Projects', () => {
	vi.mock('$lib/fs', () => ({
		readFiles: vi.fn(),
	}));

	vi.mock('@sveltejs/kit', () => ({
		json: vi.fn().mockImplementation((obj) => {
			return Promise.resolve({
				json() {
					return Promise.resolve(obj);
				},
			});
		}),
	}));

	const readFilesMock = vi.mocked(readFiles);

	it('should throw an error if project metadata cannot be parsed', async () => {
		readFilesMock.mockResolvedValueOnce(['Some content']);

		let error: any;
		try {
			await GET();
		} catch (err) {
			error = err;
		} finally {
			expect(error).toBeTruthy();
			expect(error.message).toEqual('Could not extract Project information from file');
		}
	});

	it('should return a json response with Projects', async () => {
		const { title, featured, tags, content } = {
			title: 'Vitest',
			featured: false,
			tags: ['Unit', 'Test'],
			content: `# This is a header
Markdown files are awesome!`,
		};
		const filecontents = [
			`---
title: ${title}
featured: ${featured}
tags: [${tags}]
---
${content}`,
		];

		readFilesMock.mockResolvedValueOnce(filecontents);

		const response = await GET();
		expect(response).toBeTruthy();
		expect(await response.json()).toEqual([
			{
				title,
				featured,
				tags,
				content,
			},
		]);
	});
});
