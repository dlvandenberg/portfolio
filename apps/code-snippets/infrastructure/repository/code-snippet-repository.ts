import { readFile, readFiles } from '$lib/fs';
import matter from 'front-matter';
import { isCodeSnippetFile, type CodeSnippetMetadata } from '../model/code-snippet-metadata';

export type CodeSnippetItem = {
	filename: string;
	metadata: CodeSnippetMetadata;
};

export type CodeSnippet = {
	metadata: CodeSnippetMetadata;
	content: string;
};

export const codeSnippetRepository = {
	getAll,
	getBySlug,
};

async function getAll(): Promise<CodeSnippetItem[]> {
	const files = await readFiles('data/code-snippets');

	return new Promise((resolve) => {
		const list = files.map(({ content, name }) => {
			const { attributes } = matter(content);

			if (isCodeSnippetFile(attributes)) {
				return { metadata: attributes, filename: name };
			} else {
				throw new Error('Read file is not a CodeSnippet file');
			}
		});

		resolve(list);
	});
}

async function getBySlug(slug: string): Promise<CodeSnippet> {
	const file = await readFile(`data/code-snippets/${slug}.md`);

	return new Promise((resolve) => {
		const { content } = file;
		const { attributes, body } = matter(content);

		if (isCodeSnippetFile(attributes)) {
			resolve({ metadata: attributes, content: body });
		} else {
			throw new Error('Read file is not a CodeSnippet file');
		}
	});
}
