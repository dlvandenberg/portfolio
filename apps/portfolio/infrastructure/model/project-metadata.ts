import { isObject, type RequiredKeys } from '$lib/type-guard/required-keys';

export type ProjectMetadata = {
	title: string;
	featured: boolean;
	websiteUrl?: string;
	githubUrl?: string;
	tags: string[];
};

const REQUIRED_KEYS: RequiredKeys<ProjectMetadata> = {
	title: true,
	featured: true,
	tags: true,
};

export const isProjectMetadata = (value: unknown): value is ProjectMetadata =>
	isObject(REQUIRED_KEYS, value);
