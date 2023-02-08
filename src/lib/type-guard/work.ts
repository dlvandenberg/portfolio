import type { Work } from '$lib/model';
import { isObject, type RequiredKeys } from './required-keys';

const REQUIRED_KEYS: RequiredKeys<Work> = {
	name: true,
	company: true,
	jobTitle: true,
	dateFrom: true,
	dateTo: false,
	tags: true,
	content: false,
};

export const isWork = (value: unknown): value is Work => isObject(REQUIRED_KEYS, value);
