import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Section from './section.svelte';

describe('Section.svelte', () => {
	const testIds = {
		subtitle: 'section-subtitle',
		column: 'section-column',
		outlineColumn: 'section-column-outline',
	};

	it('should render only title with required props', () => {
		const title = 'Unit Test';

		render(Section, { title });

		expect(screen.getByText(title)).toBeInTheDocument();
		expect(screen.queryByTestId(testIds.subtitle)).not.toBeInTheDocument();
		expect(screen.queryByTestId(testIds.column)).not.toBeInTheDocument();
		expect(screen.queryByTestId(testIds.outlineColumn)).not.toBeInTheDocument();
	});

	it('should render title and subtitle if prop is set', () => {
		const title = 'Unit Test';
		const subtitle = 'using vitest';

		render(Section, { title, subtitle });

		expect(screen.getByText(title)).toBeInTheDocument();
		expect(screen.getByText(subtitle)).toBeInTheDocument();
	});
});
