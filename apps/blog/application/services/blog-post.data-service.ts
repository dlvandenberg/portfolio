import type { BlogPostLink, BlogPost } from '../../domain/model';
import { blogPostRepository } from '../../infrastructure';

export const blogPostDataService = {
	getAll,
	getBySlug,
};

async function getAll(): Promise<BlogPostLink[]> {
	const files = await blogPostRepository.getAll();
	const blogPostLinks: BlogPostLink[] = files.map(({ metadata: file, filename: name }) => {
		const { description, title, tags, dateAdded } = file;
		return {
			__typename: 'BlogPostLink',
			description,
			tags,
			title,
			dateAdded,
			slug: createSlug(name),
		};
	});

	return blogPostLinks;
}

async function getBySlug(slug: string): Promise<BlogPost> {
	const {
		content,
		metadata: { title, tags, dateAdded },
	} = await blogPostRepository.getBySlug(slug);

	const blogPost: BlogPost = {
		__typename: 'BlogPost',
		content,
		title,
		tags,
		dateAdded,
	};

	return blogPost;
}

const createSlug = (filename: string): string => filename.replaceAll(' ', '-').replace(/\.md$/, '');
