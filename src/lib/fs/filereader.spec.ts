import { describe, vi } from 'vitest';
import { readFile, readFiles } from './filereader';

import { readdir, readFile as readfile } from 'fs/promises';

vi.mock('fs/promises');

const readdirMock = vi.mocked(readdir);
const readFileMock = vi.mocked(readfile);

const makeDirent = (name: string, isFile: boolean) => ({
	name,
	isFile: () => isFile,
	isDirectory: vi.fn(),
	isBlockDevice: vi.fn(),
	isCharacterDevice: vi.fn(),
	isSymbolicLink: vi.fn(),
	isFIFO: vi.fn(),
	isSocket: vi.fn(),
});

const setupReaddirMock = (...filenames: string[]) => {
	const files = [
		...filenames.map((filename) => makeDirent(filename, true)),
		makeDirent('Directory1', false),
	];

	readdirMock.mockResolvedValueOnce(files);
	readFileMock.mockImplementation((path) => Promise.resolve(path.toString()));
};

describe('FileReader', () => {
	afterEach(() => {
		vi.resetAllMocks();
	});

	it('should return an empty list when given directory does not exist', async () => {
		readdirMock.mockRejectedValueOnce(new Error());
		const data = await readFiles('path');

		expect(data).toEqual([]);
	});

	it('should return an empty list if given directory does not contain files', async () => {
		readdirMock.mockResolvedValueOnce([]);
		const data = await readFiles('path');
		expect(data).toEqual([]);
	});

	it('should return an array of file contents of the files in the directory', async () => {
		setupReaddirMock('file1', 'file2');
		const data = await readFiles('path');
		expect(data).toEqual(['path/file1', 'path/file2']);
	});

	describe('when sorting', () => {
		it('should return a unsorted array if filenames do not have a prefix', async () => {
			setupReaddirMock('file1', 'file2');
			const data = await readFiles('path');
			expect(data).toEqual(['path/file1', 'path/file2']);
		});

		it('should return a sorted array in descending order by default if filenames have a prefix', async () => {
			setupReaddirMock('000_file1', '001_file2');
			const data = await readFiles('path');
			expect(data).toEqual(['path/001_file2', 'path/000_file1']);
		});

		it('should return a sorted array in ascending order if sort argument is asc and filenames have a prefix', async () => {
			setupReaddirMock('000_file1', '001_file2');
			const data = await readFiles('path', 'asc');
			expect(data).toEqual(['path/000_file1', 'path/001_file2']);
		});
	});

	describe('when reading file directly', () => {
		it('should return the file contents', async () => {
			const fileContents = '# Header';
			readFileMock.mockResolvedValueOnce(fileContents);
			const contents = await readFile('somePath');
			expect(contents).toEqual(fileContents);
		});

		it('should return an empty string when file does not exist', async () => {
			const contents = await readFile('non-existent-path');
			expect(contents).toEqual('');
		});
	});
});
