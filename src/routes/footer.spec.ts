import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Footer from './footer.svelte';

describe('Footer.svelte', () => {
	const testIds = {
		githubLink: 'footer-github-link',
	};

	const links = {
		github: 'https://github.com/dlvandenberg',
	};

	it('should render social links', () => {
		render(Footer);

		expect(screen.queryByTestId(testIds.githubLink)).toHaveAttribute('href', links.github);
	});

	it('should render footer message', () => {
		render(Footer);
		expect(
			screen.getByText(`Designed and built by me (2022-${new Date().getFullYear()})`),
		).toBeInTheDocument();
	});
});
