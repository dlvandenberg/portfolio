import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Section from './section.svelte';

describe('Section.svelte', () => {
	it('should render only title with required props', () => {
		const title = 'Unit Test';
		const { container } = render(Section, { title });

		expect(screen.getByText(title)).toBeInTheDocument();
		expect(container.querySelector('.section-subtitle')).not.toBeInTheDocument();
		expect(container.querySelector('.section-col.outline')).not.toBeInTheDocument();
		expect(container.querySelector('.section-col')).not.toBeInTheDocument();
	});

	it('should render title and subtitle if prop is set', () => {
		const title = 'Unit Test';
		const subtitle = 'using vitest';
		const { container } = render(Section, { title, subtitle });

		expect(screen.getByText(title)).toBeInTheDocument();
		expect(screen.getByText(subtitle)).toBeInTheDocument();
		expect(container.querySelector('.section-col.outline')).not.toBeInTheDocument();
		expect(container.querySelector('.section-col')).not.toBeInTheDocument();
	});

	it('should render slots', () => {
		expect(true);
		// -> https://github.com/sveltejs/svelte/pull/4296
	});
});
