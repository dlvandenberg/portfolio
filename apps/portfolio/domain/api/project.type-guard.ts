import { isObject, type RequiredKeys } from '$lib/type-guard';
import type { Project } from '../model';

const REQUIRED_KEYS: RequiredKeys<Project> = {
	title: true,
	tags: true,
	featured: true,
	content: false,
	githubUrl: false,
	websiteUrl: false,
};

export function isProject(value: unknown): value is Project {
	return isObject(REQUIRED_KEYS, value);
}

export function isProjectArray(value: unknown): value is Project[] {
	return Array.isArray(value) && value.every((element) => isProject(element));
}
