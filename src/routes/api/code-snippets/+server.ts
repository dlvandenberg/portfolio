import { codeSnippetDataService } from '$apps/code-snippets';
import { json, type RequestHandler } from '@sveltejs/kit';

export const GET = (async (): Promise<Response> => {
	return codeSnippetDataService
		.getAll()
		.then((links) => json(links))
		.catch((error) => {
			throw error(404, error);
		});
}) satisfies RequestHandler;
