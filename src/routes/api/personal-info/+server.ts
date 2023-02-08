import { readFile } from '$lib/fs';
import type { PersonalInfo } from '$lib/model';
import { isPersonalInfo } from '$lib/type-guard/personal-info';
import { error, json } from '@sveltejs/kit';
import matter from 'front-matter';
import type { RequestHandler } from './$types';

export const GET = (async (): Promise<Response> => {
	const { content } = await readFile('data/personal/info.md');
	const { attributes, body } = matter(content);
	let about: PersonalInfo;
	if (isPersonalInfo(attributes)) {
		about = { ...attributes, content: body };
	} else {
		throw error(500, 'Could not extract Personal Information from file');
	}

	return json(about);
}) satisfies RequestHandler;
