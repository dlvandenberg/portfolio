import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import SlidingHeader from './sliding-header.svelte';

describe('SlidingHeader.svelte', () => {
	const testIds = {
		header: 'header',
	};

	const modifiers = {
		active: '-active',
	};

	it('should show header when rendered without props', () => {
		render(SlidingHeader);
		expect(screen.queryByTestId(testIds.header)).toBeInTheDocument();
		expect(screen.queryByTestId(testIds.header)).not.toHaveClass(modifiers.active);
	});

	it('should show header when rendered with isActive and a custom active class', () => {
		render(SlidingHeader, { activeClass: 'open', isActive: true });
		expect(screen.queryByTestId(testIds.header)).toBeInTheDocument();
		expect(screen.queryByTestId(testIds.header)).toHaveClass('open');
		expect(screen.queryByTestId(testIds.header)).not.toHaveClass(modifiers.active);
	});

	it('should show header when rendered with isActive to true', () => {
		render(SlidingHeader, { isActive: true });
		expect(screen.queryByTestId(testIds.header)).toBeInTheDocument();
		expect(screen.queryByTestId(testIds.header)).toHaveClass(modifiers.active);
	});
});
