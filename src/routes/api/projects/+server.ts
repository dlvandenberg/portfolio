import { createUrl, fetchRequest } from '$lib/http';
import type { Project } from '$lib/model';
import { json, type RequestHandler } from '@sveltejs/kit';
import type { SkillResponse } from '../skills/+server';

interface ProjectResponse {
	data: {
		id: number;
		attributes: {
			title: string;
			websiteUrl: string;
			githubUrl: string;
			description: string;
			featured: boolean;
			createdAt: string;
			updatedAt: string;
			locale: string;
			skills: SkillResponse;
		};
	}[];
}

export const GET = (async (): Promise<Response> => {
	const requestUrl = createUrl('projects', { populate: '*' });
	return fetchRequest(requestUrl)
		.then((response) => response.json())
		.then((jsonResponse: ProjectResponse) => {
			const projectData: Project[] = jsonResponse.data.map((item) => {
				const { title, websiteUrl, githubUrl, description, featured } = item.attributes;
				const skills = item.attributes.skills.data
					.map((skill) => skill.attributes)
					.map(({ name, colorCode, learning, level }) => {
						return { name, colorCode, learning, level };
					});
				return {
					title,
					websiteUrl,
					githubUrl,
					description,
					featured,
					skills,
				};
			});
			return json(projectData);
		});
}) satisfies RequestHandler;
