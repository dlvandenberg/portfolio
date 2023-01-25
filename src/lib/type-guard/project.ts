import type { Project } from '$lib/model';

const keys: (keyof Project)[] = ['title', 'tags', 'featured'];

export const isProject = (value: unknown): value is Project => {
	return typeof value === 'object' && !!value && keys.every((key) => key in value);
};
