import { render, screen } from '@testing-library/svelte';
import { describe, it } from 'vitest';
import { Contact } from '.';

describe('Contact.svelte', () => {
	const testIds = {
		info: 'contact-info',
		emailButton: 'email-button',
	};

	it('should render info block and email button', () => {
		const email = 'vitest@unit.test';
		render(Contact, { email });

		expect(screen.queryByTestId(testIds.info)).toBeInTheDocument();
		expect(screen.queryByTestId(testIds.emailButton)).toHaveAttribute('href', `mailto:${email}`);
	});

	it('should not render email button if email is undefined', () => {
		render(Contact, { email: undefined as unknown as string });
		expect(screen.queryByTestId(testIds.emailButton)).not.toBeInTheDocument();
	});
});
