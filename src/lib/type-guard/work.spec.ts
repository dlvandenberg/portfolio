import { describe, expect, it } from 'vitest';
import { isWork } from './work';

describe('TypeGuard: Work', () => {
	it('should return false when value is not an object', () => {
		const value = 'work';
		expect(isWork(value)).toBeFalsy();
	});

	it('should return false when value is nullish', () => {
		expect(isWork(undefined)).toBeFalsy();

		expect(isWork(null)).toBeFalsy();
	});

	it('should return false when value does not have required fields', () => {
		const value = {
			name: 'Title',
		};

		expect(isWork(value)).toBeFalsy();
	});

	it('should return true when value has all required fields', () => {
		const value = {
			name: 'Title',
			company: 'Personal',
			jobTitle: 'Developer',
			dateFrom: '2023-01-01',
			tags: ['Unit', 'Test'],
		};

		expect(isWork(value)).toBeTruthy();
	});
});
