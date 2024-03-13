import { projectDataService } from '$apps/portfolio';
import { error, json, type RequestHandler } from '@sveltejs/kit';

export const GET = (async (): Promise<Response> => {
	return projectDataService
		.getAll()
		.then((projects) => json(projects))
		.catch((errorMessage) => {
			console.error(errorMessage);
			error(500, { message: errorMessage.message });
		});
}) satisfies RequestHandler;
