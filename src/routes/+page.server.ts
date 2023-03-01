import { isPersonalInfo, isProjectArray, isWorkArray } from '$apps/portfolio';
import { request } from '$lib/http';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const prerender = true;

export const load = (async ({ fetch }) => {
	const personalInfo = await getData(fetch, '/api/personal-info', isPersonalInfo, 'PersonalInfo');
	const projects = await getData(fetch, '/api/projects', isProjectArray, 'Projects');
	const workExperience = await getData(fetch, '/api/works', isWorkArray, 'Works');

	return {
		personalInfo,
		projects,
		workExperience,
	};
}) satisfies PageServerLoad;

async function getData<T>(
	fetchFn: typeof fetch,
	apiUrl: string,
	typeGuard: (value: unknown) => value is T,
	name: string,
): Promise<T> {
	const response = await request(fetchFn, apiUrl);
	if (response.status === 200) {
		const json = await response.json();

		if (typeGuard(json)) {
			return json;
		} else {
			throw error(404, `Could not find ${name}`);
		}
	} else {
		throw error(response.status, `Something went wrong while fetching ${name}`);
	}
}
