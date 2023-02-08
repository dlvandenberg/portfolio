import type { Project } from '$lib/model';
import { isObject, type RequiredKeys } from './required-keys';

const REQUIRED_KEYS: RequiredKeys<Project> = {
	title: true,
	tags: true,
	featured: true,
	content: false,
	githubUrl: false,
	websiteUrl: false,
};

export const isProject = (value: unknown): value is Project => isObject(REQUIRED_KEYS, value);
