import { describe, expect, it } from 'vitest';
import { isPersonalInfo } from './personal-info';

describe('TypeGuard: PersonalInfo', () => {
	it('should return false if value is not an object', () => {
		expect(isPersonalInfo('test')).toBeFalsy();
	});

	it('should return false if value is nullish', () => {
		expect(isPersonalInfo(null)).toBeFalsy();
		expect(isPersonalInfo(undefined)).toBeFalsy();
	});

	it('should return false if value is not a PersonalInfo object', () => {
		const value = {
			key: 'value',
		};
		expect(isPersonalInfo(value)).toBeFalsy();
	});

	it('should return true if value is a PersonalInfo object', () => {
		const value = {
			firstName: 'Dennis',
			lastName: 'van den Berg',
			dateOfBirth: '2000-01-01',
			gender: 'Male',
			nationality: 'Dutch',
			email: 'email@vitest.com',
			married: true,
			kids: 0,
		};
		expect(isPersonalInfo(value)).toBeTruthy();
	});
});
