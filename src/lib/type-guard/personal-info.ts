import type { PersonalInfo } from '$lib/model';

const keys: (keyof PersonalInfo)[] = [
	'firstName',
	'lastName',
	'dateOfBirth',
	'gender',
	'nationality',
	'email',
	'married',
	'kids',
];

export const isPersonalInfo = (value: unknown): value is PersonalInfo => {
	return typeof value === 'object' && !!value && keys.every((key) => key in value);
};
