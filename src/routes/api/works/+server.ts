import { createUrl } from '$lib/http';
import type { Work } from '$lib/model';
import { json } from '@sveltejs/kit';
import type { SkillResponse } from '../skills/+server';
import type { RequestHandler } from './$types';

interface WorkResponse {
	data: {
		id: number;
		attributes: {
			name: string;
			company: string;
			jobTitle: string;
			dateFrom: string;
			order: number;
			dateTo?: string;
			description: string;
			createdAt: string;
			updatedAt: string;
			locale: string;
			skills: SkillResponse;
		};
	}[];
}

export const GET = (async ({ fetch }): Promise<Response> => {
	const url = createUrl('works', { populate: '*', sort: 'order:desc' });
	return fetch(url)
		.then((response) => response.json())
		.then((jsonResponse: WorkResponse) => {
			const workData: Work[] = jsonResponse.data.map((item) => {
				const { name, company, jobTitle, dateFrom, dateTo, description } = item.attributes;
				const skills = item.attributes.skills.data
					.map((skill) => skill.attributes)
					.map(({ name, colorCode, learning, level }) => {
						return { name, colorCode, learning, level };
					});

				return { name, company, jobTitle, dateFrom, dateTo, description, skills };
			});
			return json(workData);
		});
}) satisfies RequestHandler;
