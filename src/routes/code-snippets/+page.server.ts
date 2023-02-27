import { request } from '$lib/http';
import type { CodeSnippetLink } from '$lib/model/code-snippet';
import { isCodeSnippetLink } from '$lib/type-guard';
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
			throw error(404, 'Could not find CodeSnippets');
		}
	} else {
		throw error(response.status, 'Something went wrong while fetching CodeSnippets');
	}
}) satisfies PageServerLoad;

function isCodeSnippetsArray(value: unknown[]): value is CodeSnippetLink[] {
	return Array.isArray(value) && value.every((element) => isCodeSnippetLink(element));
}
