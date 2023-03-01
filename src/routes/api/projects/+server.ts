import { projectDataService } from '$apps/portfolio';
import { json, type RequestHandler } from '@sveltejs/kit';

export const GET = (async (): Promise<Response> => {
	return projectDataService
		.getAll()
		.then((projects) => json(projects))
		.catch((error) => {
			throw error(404, error);
		});
}) satisfies RequestHandler;
