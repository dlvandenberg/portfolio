import { readFiles } from '$lib/fs';
import type { Project } from '$lib/model';
import { isProject } from '$lib/type-guard';
import { json, type RequestHandler } from '@sveltejs/kit';
import matter from 'front-matter';

export const GET = (async (): Promise<Response> => {
	const projects = (await readFiles('data/projects')).map((fileContents) => {
		const { attributes, body } = matter(fileContents);

		if (isProject(attributes)) {
			return { ...attributes, content: body } as Project;
		} else {
			throw Error('Could not extract Project information from file', {
				cause: 'Incorrect metadata format',
			});
		}
	});

	return json(projects);
}) satisfies RequestHandler;
