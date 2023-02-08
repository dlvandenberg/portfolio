import { describe, expect, it } from 'vitest';
import { isObject, type RequiredKeys } from './required-keys';

describe('TypeGuard: RequiredKeys', () => {
	type ObjectType = {
		code: string;
		cardNumber: string;
		name: string;
	};
	const REQUIRED_KEYS: RequiredKeys<ObjectType> = {
		cardNumber: true,
		code: true,
		name: false,
	};

	it('should return false when value is not an object', () => {
		const value = 'string';

		expect(isObject<ObjectType>(REQUIRED_KEYS, value)).toEqual(false);
	});

	it('should return false when value is null', () => {
		const value = null;

		expect(isObject<ObjectType>(REQUIRED_KEYS, value)).toEqual(false);
	});

	it('should return false when value is undefined', () => {
		const value = undefined;

		expect(isObject<ObjectType>(REQUIRED_KEYS, value)).toEqual(false);
	});

	it('should return false when value is ObjectType but does not contain required fields', () => {
		const value = {
			cardNumber: '0x0221',
		};

		expect(isObject<ObjectType>(REQUIRED_KEYS, value)).toEqual(false);
	});

	it('should return true when value is ObjectType and contains required fields', () => {
		const value = {
			cardNumber: '0x022',
			code: 'a14thaeotd-cado',
		};

		expect(isObject<ObjectType>(REQUIRED_KEYS, value)).toEqual(true);
	});
});
