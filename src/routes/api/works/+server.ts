import { readFiles } from '$lib/fs';
import type { Work } from '$lib/model';
import { isWork } from '$lib/type-guard';
import { json } from '@sveltejs/kit';
import matter from 'front-matter';
import type { RequestHandler } from './$types';

export const GET = (async (): Promise<Response> => {
	const experiences = (await readFiles('data/work')).map((fileContents) => {
		const { attributes, body } = matter(fileContents);

		if (isWork(attributes)) {
			return { ...attributes, content: body } as Work;
		} else {
			throw Error('Could not extract Work information from file', {
				cause: 'Incorrect metadata format',
			});
		}
	});

	return json(experiences);
}) satisfies RequestHandler;
