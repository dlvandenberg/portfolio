import { createUrl, fetchRequest } from '$lib/http';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

interface WorkResponse {
	data: {
		id: number;
		attributes: {
			name: string;
			job: string;
			jobTitle: string;
			dateFrom: Date;
			dateTo?: Date;
			description: string;
			createdAt: Date;
			updatedAt: Date;
			locale: string;
			skills: {
				data: {
					id: number;
					attributes: {
						name: string;
						colorCode: string;
						createdAt: Date;
						updatedAt: Date;
						learning: boolean;
						level: number;
					};
				}[];
			};
		};
	}[];
}

export const GET = (async (): Promise<Response> => {
	const url = createUrl('works', { populate: '*' });
	const response = await fetchRequest(url);
	const jsonResponse: WorkResponse = await response.json();

	const workData = jsonResponse.data.map((item) => {
		return {
			...item.attributes,
			skills: item.attributes.skills.data.map((skill) => skill.attributes),
		};
	});

	return json(workData);
}) satisfies RequestHandler;
