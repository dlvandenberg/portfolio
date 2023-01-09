import { createUrl } from '$lib/http';
import type { Skill } from '$lib/model/skill';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export interface SkillResponse {
	data: {
		id: number;
		attributes: {
			name: string;
			colorCode: string;
			learning: boolean;
			level?: number;
			createdAt: string;
			updatedAt: string;
		};
	}[];
}

export const GET = (async ({ fetch }): Promise<Response> => {
	const url = createUrl('skills');
	return fetch(url)
		.then((response) => response.json())
		.then((jsonResponse: SkillResponse) => {
			const skills: Skill[] = jsonResponse.data.map((skillItem) => {
				const { name, colorCode, learning, level } = skillItem.attributes;
				return {
					name,
					colorCode,
					learning,
					level,
				};
			});
			return json(skills);
		});
}) satisfies RequestHandler;
