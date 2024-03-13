import { isBlogPost } from '$apps/blog';
import { request } from '$lib/http';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const prerender = true;

export const load = (async ({ fetch, params }) => {
	const response = await request(fetch, `/api/blog-posts/${params.slug}`);

	if (response.status === 200) {
		const json = await response.json();
		if (isBlogPost(json)) {
			return { post: json };
		} else {
			error(404, 'Could not find Blog post');
		}
	} else {
		error(response.status, 'Something went wrong while fetching Blog post.');
	}
}) satisfies PageServerLoad;
