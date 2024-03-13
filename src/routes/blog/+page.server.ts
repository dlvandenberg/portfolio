import { isBlogPostsArray } from '$apps/blog';
import { request } from '$lib/http';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const prerender = true;

export const load = (async ({ fetch }) => {
	const response = await request(fetch, '/api/blog-posts');
	if (response.status === 200) {
		const json = await response.json();

		if (isBlogPostsArray(json)) {
			return { posts: json };
		} else {
			console.error('Response is not a Blog Post array');
			error(404, 'Could not find Blog posts');
		}
	} else {
		error(response.status, 'Something went wrong while fetching Blog posts.');
	}
}) satisfies PageServerLoad;
