import type { Work } from '$lib/model';

const keys: (keyof Work)[] = ['name', 'company', 'jobTitle', 'dateFrom', 'tags'];

export const isWork = (value: unknown): value is Work => {
	return typeof value === 'object' && !!value && keys.every((key) => key in value);
};
