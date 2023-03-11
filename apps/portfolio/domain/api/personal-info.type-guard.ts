import { isObject, type RequiredKeys } from '$lib/type-guard';
import type { PersonalInfo } from '../model/personal-info';

const REQUIRED_KEYS: RequiredKeys<PersonalInfo> = {
	firstName: true,
	lastName: true,
	dateOfBirth: true,
	gender: true,
	nationality: true,
	email: true,
	married: true,
	kids: true,
	content: false,
};

export const isPersonalInfo = (value: unknown): value is PersonalInfo =>
	isObject(REQUIRED_KEYS, value);
