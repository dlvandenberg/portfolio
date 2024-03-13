import { blogPostDataService } from '$apps/blog';
import { error, json, type RequestHandler } from '@sveltejs/kit';

export const GET = (async (): Promise<Response> => {
	return blogPostDataService
		.getAll()
		.then((links) => json(links))
		.catch((errorMessage) => {
			console.error(errorMessage);
			error(500, { message: errorMessage.message });
		});
}) satisfies RequestHandler;
