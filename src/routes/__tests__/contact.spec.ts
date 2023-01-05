import type { ContactInfo } from '$lib/model';
import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Contact from '../contact.svelte';

describe('Contact.svelte', () => {
	it('should render contact-info', () => {
		const info: ContactInfo = {
			email: 'dennis@vdberg.dev',
			info: 'Vitest',
		};

		const { container } = render(Contact, { contactInfo: info });
		expect(screen.getByText('$ contact')).toBeInTheDocument();
		expect(screen.getByText(info.info)).toBeInTheDocument();
		expect(container.querySelector(`a[href="mailto:${info.email}"]`)).toBeInTheDocument();
	});

	it('should not render contact-info when prop is undefined', () => {
		const { container } = render(Contact, { contactInfo: undefined as unknown as ContactInfo });
		expect(container.querySelector('.outline-col')).not.toBeInTheDocument();
	});
});
