import { describe, expect, it } from 'vitest';
import { isProject } from './project';

describe('TypeGuard: Project', () => {
	it('should return false when argument is not an object', () => {
		const argument = 'string';
		expect(isProject(argument)).toBeFalsy();
	});

	it('should return false when argument does not have project fields', () => {
		const object = { name: 'Some object' };
		expect(isProject(object)).toBeFalsy();
	});

	it('should return false when argument is nullish', () => {
		let object = undefined;
		expect(isProject(object)).toBeFalsy();

		object = null;
		expect(isProject(object)).toBeFalsy();
	});

	it('should return true when argument has all required project fields', () => {
		const object = {
			title: 'Vitest',
			tags: ['Unit', 'Test'],
			featured: true,
		};
		expect(isProject(object)).toBeTruthy();
	});
});
