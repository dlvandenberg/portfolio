import { createUrl, extractSearchParams, fetchRequest } from '$lib/http';
import { json, type RequestHandler } from '@sveltejs/kit';

interface ProjectResponse {
	data: {
		id: number;
		attributes: {
			title: string;
			websiteUrl: string;
			githubUrl: string;
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

export const GET = (async ({ url }): Promise<Response> => {
	const searchParamsFromClient = extractSearchParams(url.searchParams);
	const requestUrl = createUrl('projects', { populate: '*', ...searchParamsFromClient });
	const response = await fetchRequest(requestUrl);
	const jsonResponse: ProjectResponse = await response.json();

	const projectData = jsonResponse.data.map((item) => {
		return {
			...item.attributes,
			skills: item.attributes.skills.data.map((skill) => skill.attributes),
		};
	});

	return json(projectData);
}) satisfies RequestHandler;
