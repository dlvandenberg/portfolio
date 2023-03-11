import { readFile } from '$lib/fs';
import matter from 'front-matter';
import { isPersonalInfoMetadata, type PersonalInfoMetadata } from '../model';

type PersonalInfoFile = {
	metadata: PersonalInfoMetadata;
	content: string;
};

export const personalInfoRepository = {
	get,
};

async function get(): Promise<PersonalInfoFile> {
	const { content } = await readFile('data/personal/info.md');

	return new Promise((resolve) => {
		const { attributes, body } = matter(content);

		if (isPersonalInfoMetadata(attributes)) {
			resolve({ metadata: attributes, content: body });
		} else {
			throw new Error('Read file is not a Personal Info file');
		}
	});
}
