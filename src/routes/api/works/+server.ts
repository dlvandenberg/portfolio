import { workDataService } from '$apps/portfolio';
import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET = (async (): Promise<Response> => {
	return workDataService
		.getAll()
		.then((works) => json(works))
		.catch((errorMessage) => {
			console.error(errorMessage);
			throw error(500, { message: errorMessage.message });
		});
}) satisfies RequestHandler;
