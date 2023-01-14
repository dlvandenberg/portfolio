import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import SlidingHeader from './sliding-header.svelte';

describe('SlidingHeader.svelte', () => {
	it('should show header when rendered without props', () => {
		const { container } = render(SlidingHeader);
		expect(container.querySelector('.header')).toBeInTheDocument();
		expect(container.querySelector('.header')).not.toHaveClass('active');
	});

	it('should show header when rendered with isActive and a custom active class', () => {
		const { container } = render(SlidingHeader, { activeClass: 'open', isActive: true });
		expect(container.querySelector('.header')).toBeInTheDocument();
		expect(container.querySelector('.header')).toHaveClass('open');
		expect(container.querySelector('.header')).not.toHaveClass('active');
	});

	it('should show header when rendered with isActive to true', () => {
		const { container } = render(SlidingHeader, { isActive: true });
		expect(container.querySelector('.header')).toBeInTheDocument();
		expect(container.querySelector('.header')).toHaveClass('active');
	});
});
