import { ENDPOINT_TOKEN } from '$env/static/private';
import type { ContactInfo, PersonalInfo, Project, Work } from '$lib/model';
import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
	const personalInfoResponse = await request(fetch, '/api/personal-info');
	const contactInfoResponse = await request(fetch, '/api/contact-info');
	const workExperienceResponse = await request(fetch, '/api/works');
	const projectResponse = await request(fetch, '/api/projects');
	return {
		personalInfo: (await personalInfoResponse.json()) as PersonalInfo,
		contactInfo: (await contactInfoResponse.json()) as ContactInfo,
		workExperience: (await workExperienceResponse.json()) as Work[],
		projects: (await projectResponse.json()) as Project[],
	};
}) satisfies PageServerLoad;

type FetchFn = (input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<Response>;

const request = async (fetch: FetchFn, url: RequestInfo | URL) => {
	return fetch(url, { headers: new Headers({ token: ENDPOINT_TOKEN }) });
};
