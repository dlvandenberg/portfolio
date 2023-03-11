import type { CodeSnippetLink, CodeSnippetPost } from '../../domain/model';
import { codeSnippetRepository } from '../../infrastructure';

export const codeSnippetDataService = {
	getAll,
	getBySlug,
};

async function getAll(): Promise<CodeSnippetLink[]> {
	const files = await codeSnippetRepository.getAll();
	const codeSnippetLinks: CodeSnippetLink[] = files.map(({ metadata: file, filename: name }) => {
		const { description, title, tags, dateAdded } = file;
		return {
			__typename: 'CodeSnippetLink',
			description,
			tags,
			title,
			dateAdded,
			slug: createSlug(name),
		};
	});

	return codeSnippetLinks;
}

async function getBySlug(slug: string): Promise<CodeSnippetPost> {
	const {
		content,
		metadata: { title, tags, dateAdded },
	} = await codeSnippetRepository.getBySlug(slug);

	const codeSnippetPost: CodeSnippetPost = {
		__typename: 'CodeSnippetPost',
		content,
		title,
		tags,
		dateAdded,
	};

	return codeSnippetPost;
}

const createSlug = (filename: string): string => filename.replaceAll(' ', '-').replace(/\.md$/, '');
