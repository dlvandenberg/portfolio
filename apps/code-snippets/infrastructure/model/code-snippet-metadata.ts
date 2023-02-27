import { isObject, type RequiredKeys } from '$lib/type-guard/required-keys';

export type CodeSnippetMetadata = {
	title: string;
	description: string;
	dateAdded: Date;
	tags: string[];
};

const REQUIRED_KEYS: RequiredKeys<CodeSnippetMetadata> = {
	dateAdded: true,
	description: true,
	title: true,
	tags: false,
};

export const isCodeSnippetFile = (value: unknown): value is CodeSnippetMetadata =>
	isObject(REQUIRED_KEYS, value);
