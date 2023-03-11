import { isCodeSnippetPost } from '$apps/code-snippets';
import { request } from '$lib/http';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const prerender = true;

export const load = (async ({ fetch, params }) => {
	const response = await request(fetch, `/api/code-snippets/${params.slug}`);

	if (response.status === 200) {
		const json = await response.json();
		if (isCodeSnippetPost(json)) {
			return { snippet: json };
		} else {
			throw error(404, 'Could not find CodeSnippet');
		}
	} else {
		throw error(response.status, 'Something went wrong while fetching CodeSnippet');
	}
}) satisfies PageServerLoad;
