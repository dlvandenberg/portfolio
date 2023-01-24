import { render } from '@testing-library/svelte';
import { describe, it } from 'vitest';
import Contact from './contact.svelte';

describe('Contact.svelte', () => {
	const selectors = {
		info: '.info',
		button: '.button',
		emailButton: '.button__email',
	};

	it('should render info block and email button', () => {
		const email = 'vitest@unit.test';
		const { container } = render(Contact, { email });

		expect(container.querySelector(selectors.info)).toBeInTheDocument();
		expect(container.querySelector(selectors.emailButton)).toBeInTheDocument();
		expect(container.querySelector(selectors.emailButton)).toHaveAttribute(
			'href',
			`mailto:${email}`,
		);
	});

	it('should not render email button if email is undefined', () => {
		const { container } = render(Contact, { email: undefined as unknown as string });
		expect(container.querySelector(selectors.button)).not.toBeInTheDocument();
	});
});
