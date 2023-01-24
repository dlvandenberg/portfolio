import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Header from './header.svelte';

describe('Header.svelte', () => {
	const selectors = {
		brand: '.navbar__brand',
		link: '.navbar__item-link',
	};

	const modifiers = {
		active: '-active',
	};

	it('should render navigation bar when mounted', () => {
		const { container } = render(Header);
		expect(container.querySelector(selectors.brand)).toBeInTheDocument();
		expect(container.querySelector(selectors.link)).toBeInTheDocument();
		expect(container.querySelector(selectors.link)).toHaveAttribute('href', '/');
	});

	it('should show first link as active link', () => {
		const { container } = render(Header);
		const [firstLink] = container.querySelectorAll(selectors.link);
		expect(firstLink).toHaveClass(modifiers.active);
	});
});
