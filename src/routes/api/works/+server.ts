import { readFiles } from '$lib/fs';
import type { Work } from '$lib/model';
import { isWork } from '$lib/type-guard';
import { error, json } from '@sveltejs/kit';
import matter from 'front-matter';
import type { RequestHandler } from './$types';

export const GET = (async (): Promise<Response> => {
	const experiences = (await readFiles('data/work')).map(({ content }): Work => {
		const { attributes, body } = matter(content);

		if (isWork(attributes)) {
			return { ...attributes, content: body };
		} else {
			throw error(500, 'Could not extract Work information from file');
		}
	});

	return json(experiences);
}) satisfies RequestHandler;
