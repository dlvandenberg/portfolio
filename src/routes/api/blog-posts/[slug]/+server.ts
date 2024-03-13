import { blogPostDataService } from '$apps/blog';
import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET = (async ({ params }): Promise<Response> => {
	const slug: string = params.slug;
	if (!slug) {
		error(404, 'Could not find code snippet');
	}

	return blogPostDataService
		.getBySlug(slug)
		.then((post) => json(post))
		.catch((errorMessage) => {
			console.error(errorMessage);
			error(500, { message: errorMessage.message });
		});
}) satisfies RequestHandler;
