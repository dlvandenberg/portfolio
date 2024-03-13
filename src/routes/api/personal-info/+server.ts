import { personalInfoDataService } from '$apps/portfolio';
import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET = (async (): Promise<Response> => {
	return personalInfoDataService
		.get()
		.then((info) => json(info))
		.catch((errorMessage) => {
			console.error(errorMessage);
			error(500, { message: errorMessage.message });
		});
}) satisfies RequestHandler;
