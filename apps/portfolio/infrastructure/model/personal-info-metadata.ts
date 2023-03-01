import { isObject, type RequiredKeys } from '$lib/type-guard';

export type PersonalInfoMetadata = {
	firstName: string;
	lastName: string;
	dateOfBirth: Date;
	gender: string;
	nationality: string;
	email: string;
	married: boolean;
	kids: number;
};

const REQUIRED_KEYS: RequiredKeys<PersonalInfoMetadata> = {
	dateOfBirth: true,
	email: true,
	firstName: true,
	gender: true,
	kids: true,
	lastName: true,
	married: true,
	nationality: true,
};

export function isPersonalInfoMetadata(value: unknown): value is PersonalInfoMetadata {
	return isObject(REQUIRED_KEYS, value);
}
