import { personalInfoDataService } from '$apps/portfolio';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET = (async (): Promise<Response> => {
	return personalInfoDataService
		.get()
		.then((info) => json(info))
		.catch((error) => {
			throw error(error);
		});
}) satisfies RequestHandler;
