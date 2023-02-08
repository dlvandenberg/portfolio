import { render, screen } from '@testing-library/svelte';
import { describe, expect } from 'vitest';
import Header from './header.svelte';

describe('Header.svelte', () => {
	const testIds = {
		aboutLink: 'navbar-link-about',
	};

	const modifiers = {
		active: '-active',
	};

	it.skip('should render navigation bar', () => {
		render(Header);
		expect(screen.getByText('about')).toBeInTheDocument();
	});

	it.skip('should show first link as active link', () => {
		render(Header);
		expect(screen.queryByTestId(testIds.aboutLink)).toHaveClass(modifiers.active);
	});
});
