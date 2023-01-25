import { readFile } from '$lib/fs';
import type { PersonalInfo } from '$lib/model';
import { isPersonalInfo } from '$lib/type-guard/personal-info';
import { json } from '@sveltejs/kit';
import matter from 'front-matter';
import type { RequestHandler } from './$types';

export const GET = (async (): Promise<Response> => {
	const fileContents = await readFile('data/personal/info.md');
	const { attributes, body } = matter(fileContents);
	let about: PersonalInfo;
	if (isPersonalInfo(attributes)) {
		about = { ...attributes, content: body };
	} else {
		throw Error('Could not extract Personal Information from file', {
			cause: 'Incorrect metadata format',
		});
	}

	return json(about);
}) satisfies RequestHandler;
