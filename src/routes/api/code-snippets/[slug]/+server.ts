import { codeSnippetDataService } from '@apps/code-snippets';
import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET = (async ({ params }): Promise<Response> => {
	const slug: string = params.slug;
	if (!slug) {
		throw error(404, 'Could not find code snippet');
	}

	return codeSnippetDataService
		.getBySlug(slug)
		.then((post) => json(post))
		.catch((error) => {
			console.log('hi error');
			throw error(404, error);
		});
}) satisfies RequestHandler;
