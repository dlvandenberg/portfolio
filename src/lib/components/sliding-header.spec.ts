import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import SlidingHeader from './sliding-header.svelte';

describe('SlidingHeader.svelte', () => {
	const selectors = {
		header: '.header',
	};

	const modifiers = {
		active: '-active',
		visible: '-visible',
		hidden: '-hidden',
		open: '-open',
	};
	it('should show header when rendered without props', () => {
		const { container } = render(SlidingHeader);
		expect(container.querySelector(selectors.header)).toBeInTheDocument();
		expect(container.querySelector(selectors.header)).not.toHaveClass(modifiers.active);
	});

	it('should show header when rendered with isActive and a custom active class', () => {
		const { container } = render(SlidingHeader, { activeClass: 'open', isActive: true });
		expect(container.querySelector(selectors.header)).toBeInTheDocument();
		expect(container.querySelector(selectors.header)).toHaveClass('open');
		expect(container.querySelector(selectors.header)).not.toHaveClass(modifiers.active);
	});

	it('should show header when rendered with isActive to true', () => {
		const { container } = render(SlidingHeader, { isActive: true });
		expect(container.querySelector(selectors.header)).toBeInTheDocument();
		expect(container.querySelector(selectors.header)).toHaveClass(modifiers.active);
	});
});
