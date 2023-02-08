import type { CodeSnippet } from '$lib/model/code-snippet';
import { isObject, type RequiredKeys } from './required-keys';

const REQUIRED_KEYS: RequiredKeys<CodeSnippet> = {
	dateAdded: true,
	description: true,
	title: true,
	content: false,
	slug: false,
};

export const isCodeSnippet = (value: unknown): value is CodeSnippet =>
	isObject(REQUIRED_KEYS, value);
