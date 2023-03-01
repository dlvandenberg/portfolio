import { readFiles } from '$lib/fs';
import matter from 'front-matter';
import { isWorkMetadata, type WorkMetadata } from '../model';

export type WorkFile = {
	metadata: WorkMetadata;
	content: string;
};

export const workRepository = {
	getAll,
};

async function getAll(): Promise<WorkFile[]> {
	const files = await readFiles('data/work');

	return new Promise((resolve) => {
		const list = files.map(({ content }) => {
			const { attributes, body } = matter(content);

			if (isWorkMetadata(attributes)) {
				return {
					metadata: attributes,
					content: body,
				};
			} else {
				throw new Error('File is not a WorkFile');
			}
		});

		resolve(list);
	});
}
