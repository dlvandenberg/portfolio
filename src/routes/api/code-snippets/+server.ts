import { readFiles } from '$lib/fs';
import type { CodeSnippet } from '$lib/model/code-snippet';
import { isCodeSnippet } from '$lib/type-guard/code-snippet';
import { json } from '@sveltejs/kit';
import matter from 'front-matter';
import type { RequestHandler } from './$types';

export const GET = (async (): Promise<Response> => {
	return readFiles('data/code-snippets')
		.then((snippets) =>
			snippets.map(({ content, name }) => {
				const { attributes } = matter(content);
				let codeSnippet: CodeSnippet;
				if (isCodeSnippet(attributes)) {
					codeSnippet = { ...attributes, slug: createSlug(name) };
				} else {
					throw Error('Could not extract CodeSnippet from file');
				}
				return codeSnippet;
			}),
		)
		.then((snippets) => json(snippets));
}) satisfies RequestHandler;

const createSlug = (filename: string): string => filename.replaceAll(' ', '-').replace(/\.md$/, '');
