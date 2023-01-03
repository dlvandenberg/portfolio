import { createUrl, fetchRequest } from '$lib/http';
import type { Skill } from '$lib/model/skill';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

interface SkillResponse {
	data: {
		id: number;
		attributes: {
			name: string;
			colorCode: string;
			learning: boolean;
			level?: number;
			createdAt: Date;
			updatedAt: Date;
		};
	}[];
}

export const GET = (async (): Promise<Response> => {
	const url = createUrl('skills');
	const response = await fetchRequest(url);
	const jsonResponse: SkillResponse = await response.json();
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
}) satisfies RequestHandler;
