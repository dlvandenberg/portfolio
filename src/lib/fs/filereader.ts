import fs from 'fs/promises';
import path from 'path';

export const readFiles = async (
	directory: string,
	sort: 'asc' | 'desc' = 'desc',
): Promise<string[]> => {
	let files;
	try {
		files = await fs.readdir(directory, { withFileTypes: true });
	} catch (error) {
		console.error(`No such directory: '${directory}'`);
		return [];
	}

	const data = files
		.filter((file) => file.isFile())
		.sort((a, b) => sortOnPrefix(a.name, b.name, sort))
		.map((filename) => readFile(path.join(directory, filename.name)));

	return Promise.all(data);
};

const sortOnPrefix = (fileA: string, fileB: string, sort: 'asc' | 'desc'): number => {
	const prefixA = +fileA.substring(0, 3);
	const prefixB = +fileB.substring(0, 3);
	return sort === 'asc' ? prefixA - prefixB : prefixB - prefixA;
};

export const readFile = async (path: string): Promise<string> => {
	const fileContents = await fs.readFile(path, 'utf-8');
	return fileContents ?? '';
};
