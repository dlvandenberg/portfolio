import { workDataService } from '$apps/portfolio';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET = (async (): Promise<Response> => {
	return workDataService
		.getAll()
		.then((works) => json(works))
		.catch((error) => {
			throw error(404, error);
		});
}) satisfies RequestHandler;
