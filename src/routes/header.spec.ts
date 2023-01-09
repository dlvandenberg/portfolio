import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Header from './header.svelte';

describe('Header.svelte', () => {
	it('should render navigation bar', () => {
		const { container } = render(Header);
		expect(container.querySelector('.brand')).toBeInTheDocument();
		expect(container.querySelector('.nav-menu-item a[href="/"]')).toBeInTheDocument();
	});
});
