import { readFile, readFiles } from '$lib/fs';
import matter from 'front-matter';
import { isBlogPostFile, type BlogPostMetadata } from '../model/blog-post-metadata';

export type BlogPostItem = {
	filename: string;
	metadata: BlogPostMetadata;
};

export type BlogPost = {
	metadata: BlogPostMetadata;
	content: string;
};

export const blogPostRepository = {
	getAll,
	getBySlug,
};

async function getAll(): Promise<BlogPostItem[]> {
	const files = await readFiles('data/blog-posts');

	return new Promise((resolve) => {
		const list = files.map(({ content, name }) => {
			const { attributes } = matter(content);

			if (isBlogPostFile(attributes)) {
				return { metadata: attributes, filename: name };
			} else {
				throw new Error('Read file is not a BlogPost file');
			}
		});

		resolve(list);
	});
}

async function getBySlug(slug: string): Promise<BlogPost> {
	const file = await readFile(`data/blog-posts/${slug}.md`);

	return new Promise((resolve) => {
		const { content } = file;
		const { attributes, body } = matter(content);

		if (isBlogPostFile(attributes)) {
			resolve({ metadata: attributes, content: body });
		} else {
			throw new Error('Read file is not a BlogPost file');
		}
	});
}
