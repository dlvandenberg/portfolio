import { readFiles } from '$lib/fs';
import type { Project } from '$lib/model';
import { isProject } from '$lib/type-guard';
import { error, json, type RequestHandler } from '@sveltejs/kit';
import matter from 'front-matter';

export const GET = (async (): Promise<Response> => {
	const projects = (await readFiles('data/projects')).map(({ content }): Project => {
		const { attributes, body } = matter(content);

		if (isProject(attributes)) {
			return { ...attributes, content: body };
		} else {
			throw error(500, 'Could not extract Project information from file');
		}
	});

	return json(projects);
}) satisfies RequestHandler;
