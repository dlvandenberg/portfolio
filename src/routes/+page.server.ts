import { request } from '$lib/http';
import type { PersonalInfo, Project, Work } from '$lib/model';
import type { PageServerLoad } from './$types';

export const prerender = true;

export const load = (async ({ fetch }) => {
	const personalInfoResponse = await request(fetch, '/api/personal-info');
	const workExperienceResponse = await request(fetch, '/api/works');
	const projectResponse = await request(fetch, '/api/projects');
	return {
		personalInfo: (await personalInfoResponse.json()) as PersonalInfo,
		workExperience: (await workExperienceResponse.json()) as Work[],
		projects: (await projectResponse.json()) as Project[],
	};
}) satisfies PageServerLoad;
