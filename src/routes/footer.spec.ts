import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Footer from './footer.svelte';

describe('Footer.svelte', () => {
	const selectors = {
		socialLink: '.footer__item__link',
	};

	const links = {
		linkedin: 'https://www.linkedin.com/in/dlvandenberg/',
		github: 'https://github.com/dlvandenberg',
	};

	it('should render social links', () => {
		const { container } = render(Footer);

		const [linkedin, github] = container.querySelectorAll(selectors.socialLink);

		expect(linkedin).toHaveAttribute('href', links.linkedin);
		expect(github).toHaveAttribute('href', links.github);
	});

	it('should render footer message', () => {
		render(Footer);
		expect(screen.getByText('Designed and built by me (2022)')).toBeInTheDocument();
	});
});
