import { createUrl, fetchRequest } from '$lib/http';
import type { Work } from '$lib/model';
import { json } from '@sveltejs/kit';
import type { SkillResponse } from '../skills/+server';
import type { RequestHandler } from './$types';

interface WorkResponse {
	data: {
		id: number;
		attributes: {
			name: string;
			job: string;
			jobTitle: string;
			dateFrom: string;
			dateTo?: string;
			description: string;
			createdAt: string;
			updatedAt: string;
			locale: string;
			skills: SkillResponse;
		};
	}[];
}

export const GET = (async (): Promise<Response> => {
	const url = createUrl('works', { populate: '*' });
	return fetchRequest(url)
		.then((response) => response.json())
		.then((jsonResponse: WorkResponse) => {
			const workData: Work[] = jsonResponse.data.map((item) => {
				const { name, job, jobTitle, dateFrom, dateTo, description } = item.attributes;
				const skills = item.attributes.skills.data
					.map((skill) => skill.attributes)
					.map(({ name, colorCode, learning, level }) => {
						return { name, colorCode, learning, level };
					});

				return { name, job, jobTitle, dateFrom, dateTo, description, skills };
			});
			return json(workData);
		});
}) satisfies RequestHandler;
