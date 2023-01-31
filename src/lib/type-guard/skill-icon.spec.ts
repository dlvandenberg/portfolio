import { describe, expect, it } from 'vitest';
import { isSkillIcon } from './skill-icon';

describe('TypeGuard: SkillIcon', () => {
	it('should return false when value is not an object', () => {
		const value = 'SkillIcon';

		expect(isSkillIcon(value)).toBeFalsy();
	});

	it('should return false when value is nullish', () => {
		expect(isSkillIcon(undefined)).toBeFalsy();

		expect(isSkillIcon(null)).toBeFalsy();
	});

	it('should return false when value does not have required fields', () => {
		const value = {
			name: 'Vitest',
		};

		expect(isSkillIcon(value)).toBeFalsy();
	});

	it('should return true when value has all required fields', () => {
		const value = {
			name: 'Vitest',
			icon: 'faTest',
		};

		expect(isSkillIcon(value)).toEqual(true);
	});
});
