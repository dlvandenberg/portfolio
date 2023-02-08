import { request } from '$lib/http';
import type { CodeSnippet } from '$lib/model/code-snippet';
import type { PageServerLoad } from './$types';

export const prerender = true;

export const load = (async ({ fetch }) => {
	return request(fetch, '/api/code-snippets')
		.then((response) => response.json())
		.then((json) => ({ snippets: json as CodeSnippet[] }));
}) satisfies PageServerLoad;
