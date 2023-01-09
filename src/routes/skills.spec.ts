import type { Skill } from '$lib/model';
import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Skills from './skills.svelte';

describe('Skills.svelte', () => {
	it('should render skills and learning skills', () => {
		const skills: Skill[] = [
			{
				name: 'Svelte',
				colorCode: '#000',
				learning: true,
			},
			{
				name: 'Angular',
				colorCode: '#fff',
				learning: false,
			},
		];

		render(Skills, { skills });
		expect(screen.getByText('$ skills')).toBeInTheDocument();
		expect(screen.getByText('$ skills --learning')).toBeInTheDocument();
	});

	it('should not render anything if skill list is undefined', () => {
		const { container } = render(Skills, { skills: undefined });
		expect(container.querySelector('.section-container')).not.toBeInTheDocument();
	});

	it('should not render anything if skill list is empty', () => {
		const { container } = render(Skills, { skills: [] });
		expect(container.querySelector('.section-container')).not.toBeInTheDocument();
	});
});
