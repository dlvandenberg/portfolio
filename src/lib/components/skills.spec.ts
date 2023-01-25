import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Skills from './skills.svelte';

describe('Skills.svelte', () => {
	it('should render skills', () => {
		const skills = ['JavaScript', 'TypeScript'];
		render(Skills, { skills });
		skills.forEach((skill) => {
			expect(screen.getByText(skill)).toBeInTheDocument();
		});
	});

	it('should not render skills if list is undefined', () => {
		const { container } = render(Skills, { skills: undefined });
		expect(container.querySelector('.skill-list')).not.toBeInTheDocument();
	});

	it('should not render skills if list is empty', () => {
		const { container } = render(Skills, { skills: [] });
		expect(container.querySelector('.skill-list')).not.toBeInTheDocument();
	});

	it('should render skill name as class modifier', () => {
		const skills = ['TypeScript'];
		render(Skills, { skills });
		skills.forEach((skill) => {
			expect(screen.getByText(skill)).toHaveClass(`-${skill.toLowerCase()}`);
		});
	});
});
