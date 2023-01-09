import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import type { Skill } from '../model';
import Skills from './skills.svelte';

describe('Skills.svelte', () => {
	it('should render skills', () => {
		const skills: Skill[] = [
			{
				name: 'Vitest',
				colorCode: 'red',
				learning: false,
			},
			{
				name: 'Unit Test',
				colorCode: 'blue',
				learning: false,
			},
		];
		render(Skills, { skills });
		skills.forEach((skill) => {
			expect(screen.getByText(skill.name)).toBeInTheDocument();
		});
	});
});
