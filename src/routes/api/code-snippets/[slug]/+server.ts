import { readFile } from '$lib/fs';
import type { CodeSnippet } from '$lib/model/code-snippet';
import { isCodeSnippet } from '$lib/type-guard/code-snippet';
import { error, json } from '@sveltejs/kit';
import matter from 'front-matter';
import type { RequestHandler } from '../$types';

export const GET = (async ({ params }): Promise<Response> => {
	const slug: string = params.slug;
	if (!slug) {
		throw error(404, 'Could not find code snippet');
	}

	return readFile(`data/code-snippets/${slug}.md`).then(({ content }) => {
		const { attributes, body } = matter(content);
		let snippet: CodeSnippet;
		console.log(attributes);
		if (isCodeSnippet(attributes)) {
			snippet = { ...attributes, content: body };
		} else {
			throw error(404, 'Could not extract CodeSnippet');
		}

		return json(snippet);
	});
}) satisfies RequestHandler;
