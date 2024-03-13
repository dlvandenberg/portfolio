import { readFile, readFiles } from '$lib/fs';
import { describe, expect, it, vi } from 'vitest';
import { blogPostRepository } from './blog-post.repository';

describe('BlogPostRepository', () => {
	vi.mock('$lib/fs');

	const readFilesMock = vi.mocked(readFiles);
	const readFileMock = vi.mocked(readFile);

	describe('when getting a list of blog posts', () => {
		it('should return an empty list when there is no data', async () => {
			readFilesMock.mockResolvedValueOnce([]);

			const result = await blogPostRepository.getAll();

			expect(result).toHaveLength(0);
		});

		it('should return a list of blog posts', async () => {
			const filename = 'test-1.md';
			const snippet = {
				description: 'Vitest unit test',
				title: 'Vitest',
				tags: [],
				dateAdded: '2022-01-01',
			};
			readFilesMock.mockResolvedValueOnce([
				{
					name: filename,
					content: `---
title: ${snippet.title}
description: ${snippet.description}
dateAdded: ${snippet.dateAdded}
tags: ${JSON.stringify(snippet.tags)}
---`,
				},
			]);

			const snippets = [
				{
					metadata: {
						...snippet,
						dateAdded: new Date(snippet.dateAdded),
					},
					filename: filename,
				},
			];

			const result = await blogPostRepository.getAll();

			expect(result).toEqual(snippets);
		});

		it('should reject when files read are no blog posts', async () => {
			readFilesMock.mockResolvedValueOnce([{ name: 'test-1.md', content: 'Some content' }]);

			const result = blogPostRepository.getAll();
			expect(result).rejects.toThrow('Read file is not a BlogPost file');
		});
	});

	describe('when getting a single blog post by slug', () => {
		it('should reject when there is no blog post with the given slug', async () => {
			readFileMock.mockResolvedValueOnce({ name: 'test-1.md', content: '' });

			const promise = blogPostRepository.getBySlug('test-slug');

			expect(promise).rejects.toThrow('Read file is not a BlogPost file');
		});

		it('should return the blog post with the given slug', async () => {
			const snippet = {
				title: 'Vitest',
				tags: ['Tag', 'Tag2'],
				dateAdded: '2022-01-01',
				description: 'Unit test',
			};
			const content = 'This is the content';

			readFileMock.mockResolvedValueOnce({
				name: '',
				content: `---
title: ${snippet.title}
description: ${snippet.description}
tags: ${JSON.stringify(snippet.tags)}
dateAdded: ${snippet.dateAdded}
---
${content}`,
			});

			const result = await blogPostRepository.getBySlug('a-slug');

			expect(result).toEqual({
				metadata: {
					...snippet,
					dateAdded: new Date(snippet.dateAdded),
				},
				content,
			});
		});
	});
});
