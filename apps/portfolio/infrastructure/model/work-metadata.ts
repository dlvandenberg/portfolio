import { isObject, type RequiredKeys } from '$lib/type-guard';

export type WorkMetadata = {
	name: string;
	company: string;
	jobTitle: string;
	tags: string[];
	dateFrom: Date;
	dateTo?: Date;
};

const REQUIRED_KEYS: RequiredKeys<WorkMetadata> = {
	name: true,
	company: true,
	jobTitle: true,
	tags: true,
	dateFrom: true,
	dateTo: false,
};

export const isWorkMetadata = (value: unknown): value is WorkMetadata =>
	isObject(REQUIRED_KEYS, value);
