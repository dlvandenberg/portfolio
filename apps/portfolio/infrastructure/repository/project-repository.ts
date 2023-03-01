import { readFiles } from '$lib/fs';
import matter from 'front-matter';
import { isProjectMetadata, type ProjectMetadata } from '../model/project-metadata';

export type ProjectFile = {
	metadata: ProjectMetadata;
	content: string;
};

export const projectRepository = {
	getAll,
};

async function getAll(): Promise<ProjectFile[]> {
	const files = await readFiles('data/projects');

	return new Promise((resolve) => {
		const list = files.map(({ content }) => {
			const { attributes, body } = matter(content);

			if (isProjectMetadata(attributes)) {
				return {
					metadata: attributes,
					content: body,
				};
			} else {
				throw new Error('File is not a Project');
			}
		});

		resolve(list);
	});
}
