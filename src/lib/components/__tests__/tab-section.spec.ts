import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import TabSection from '../tab-section.svelte';

describe('TabSection.svelte', () => {
	it('should render title and no tabs', () => {
		const { container } = render(TabSection);
		expect(screen.getByText('$ exp --work')).toBeInTheDocument();
		expect(container.querySelector('.tabs-list-item')).not.toBeInTheDocument();
	});

	it('should render the first item as active tab by default', () => {
		const tabs = [
			{
				name: 'Tab1',
				content: 'Dummy content',
			},
			{
				name: 'Tab2',
				content: 'Lorem ipsum',
			},
		];

		const { container } = render(TabSection, { tabData: tabs });
		expect(screen.getByText('Tab1')).toBeInTheDocument();
		expect(screen.getByText('Tab2')).toBeInTheDocument();
		expect(container.querySelector('.tabs-list-item.active')?.textContent).toEqual('Tab1 ');
	});
});
