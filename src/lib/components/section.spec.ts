import { render, screen } from '@testing-library/svelte';
import html from 'svelte-htm';
import { describe, expect, it } from 'vitest';
import Section from './section.svelte';

describe('Section.svelte', () => {
	const selectors = {
		subtitle: '.section__subtitle',
		column: '.section__column',
	};

	const modifiers = {
		outline: '-outline',
	};

	it('should render only title with required props', () => {
		const title = 'Unit Test';
		const { container } = render(Section, { title });

		expect(screen.getByText(title)).toBeInTheDocument();
		expect(container.querySelector(selectors.subtitle)).not.toBeInTheDocument();
		expect(container.querySelector(selectors.column)).not.toBeInTheDocument();
	});

	it('should render title and subtitle if prop is set', () => {
		const title = 'Unit Test';
		const subtitle = 'using vitest';
		const { container } = render(Section, { title, subtitle });

		expect(screen.getByText(title)).toBeInTheDocument();
		expect(screen.getByText(subtitle)).toBeInTheDocument();
		expect(container.querySelector(selectors.column)).not.toBeInTheDocument();
	});

	describe('when slots are passed in', () => {
		const title = 'Slots';
		const slotContent = 'This is a column';

		it('should show col slot', () => {
			const { container } = render(html`
				<${Section} title="${title}">
					<div slot="col"><span>${slotContent}</span></div>
				<//>
			`);

			expect(screen.getByText(title)).toBeInTheDocument();
			expect(screen.getByText(slotContent)).toBeInTheDocument();

			expect(container.querySelector(selectors.column)).not.toHaveClass(modifiers.outline);
		});

		it('should show outline-col slot', () => {
			const { container } = render(html`
				<${Section} title="${title}">
					<div slot="outline-col"><span>${slotContent}</span></div>
				<//>
			`);

			expect(screen.getByText(title)).toBeInTheDocument();
			expect(screen.getByText(slotContent)).toBeInTheDocument();

			expect(container.querySelector(selectors.column)).toHaveClass(modifiers.outline);
		});
	});
});
