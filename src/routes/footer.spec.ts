import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Footer from './footer.svelte';

describe('Footer.svelte', () => {
	it('should render social links', () => {
		const { container } = render(Footer);
		expect(
			container.querySelector('a[href="https://www.linkedin.com/in/dlvandenberg/"]'),
		).toBeInTheDocument();
		expect(
			container.querySelector('a[href="https://github.com/dlvandenberg"]'),
		).toBeInTheDocument();
	});

	it('should render footer message', () => {
		render(Footer);
		expect(screen.getByText('Designed and built by me (2022)')).toBeInTheDocument();
	});
});
