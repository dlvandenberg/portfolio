import { isObject, type RequiredKeys } from '$lib/type-guard/required-keys';

export type BlogPostMetadata = {
	title: string;
	description: string;
	dateAdded: Date;
	tags: string[];
};

const REQUIRED_KEYS: RequiredKeys<BlogPostMetadata> = {
	dateAdded: true,
	description: true,
	title: true,
	tags: false,
};

export const isBlogPostFile = (value: unknown): value is BlogPostMetadata =>
	isObject(REQUIRED_KEYS, value);
