import { isCodeSnippetsArray } from '$apps/code-snippets';
import { request } from '$lib/http';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const prerender = true;

export const load = (async ({ fetch }) => {
	const response = await request(fetch, '/api/code-snippets');
	if (response.status === 200) {
		const json = await response.json();

		if (isCodeSnippetsArray(json)) {
			return { snippets: json };
		} else {
			console.error('Response is not a CodeSnippets array');
			throw error(404, 'Could not find CodeSnippets');
		}
	} else {
		throw error(response.status, 'Something went wrong while fetching CodeSnippets.');
	}
}) satisfies PageServerLoad;
