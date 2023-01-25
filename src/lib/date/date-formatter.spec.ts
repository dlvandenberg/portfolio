import { describe, expect, it } from 'vitest';
import { formatDate } from './date-formatter';

describe('DateFormatter', () => {
	it('should format date string to locale date string', () => {
		expect(formatDate('2020-10-01T00:00:00')).toEqual('01-10-2020');
	});

	it('should return undefined when argument is undefined', () => {
		expect(formatDate(undefined)).toBeFalsy();
	});
});
