import { request } from '$lib/http';
import { isCodeSnippet } from '$lib/type-guard';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from '../$types';

export const prerender = true;

export const load = (async ({ fetch, params }) => {
	console.log(`Received param: ${params.slug}`);

	const response = await request(fetch, `/api/code-snippets/${params.slug}`);
	const json = await response.json();

	if (isCodeSnippet(json)) {
		return { snippet: json };
	} else {
		throw error(404, 'Could not find CodeSnippet');
	}
}) satisfies PageServerLoad;
