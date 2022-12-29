import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Skills from '../components/skills.svelte';
import type { KnowingSkill, LearningSkill, Skill } from '../model/skill';

describe('Skills.svelte', () => {
	it('should render skills', async () => {
		const skills: Skill[] = [
			{
				name: 'Vitest',
				colorCode: 'red',
			},
			{
				name: 'Unit Test',
				colorCode: 'blue',
			},
		];
		render(Skills, { skills });
		skills.forEach((skill) => {
			expect(screen.getByText(skill.name)).toBeInTheDocument();
		});
	});

	it('should render KnowingSkills', () => {
		const skills: KnowingSkill[] = [
			{
				name: 'Vitest',
				colorCode: 'red',
				yearsExp: 3,
			},
			{
				name: 'Unit Test',
				colorCode: 'blue',
				yearsExp: 5,
			},
		];
		render(Skills, { skills });
		skills.forEach((skill) => {
			expect(screen.getByText(skill.name)).toBeInTheDocument();
		});
	});

	it('should render LearningSkills', () => {
		const skills: LearningSkill[] = [
			{
				name: 'Vitest',
				colorCode: 'red',
				version: '1.0.0',
			},
			{
				name: 'Unit Test',
				colorCode: 'blue',
				version: '3',
			},
		];
		render(Skills, { skills });
		skills.forEach((skill) => {
			expect(screen.getByText(skill.name)).toBeInTheDocument();
		});
	});
});
