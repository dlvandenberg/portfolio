import { isObject, type RequiredKeys } from '$lib/type-guard';
import type { Work } from '../model';

const REQUIRED_KEYS: RequiredKeys<Work> = {
	name: true,
	company: true,
	content: true,
	dateFrom: true,
	jobTitle: true,
	tags: true,
	dateTo: false,
};

export function isWork(value: unknown): value is Work {
	return isObject(REQUIRED_KEYS, value);
}

export function isWorkArray(value: unknown): value is Work[] {
	return Array.isArray(value) && value.every((element) => isWork(element));
}
