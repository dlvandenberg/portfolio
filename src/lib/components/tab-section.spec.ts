import { render, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import TabSection from './tab-section.svelte';
import TabSectionSlot from './__tests__/tab-section-slot.svelte';

describe('TabSection.svelte', () => {
	const selectors = {
		tabs: '.tabs',
		tabsTitle: '.tabs__title',
		tabsItem: '.tabs__item',
		tabContent: '.tab__content',
	};

	const modifiers = {
		active: '-active',
	};

	it('should not render anything when tabData is empty', () => {
		const { container } = render(TabSection, { tabData: new Map() });
		expect(container.querySelector(selectors.tabs)).not.toBeInTheDocument();
	});

	describe('when slot is provided', () => {
		const tabs = [
			{
				name: 'Vitest',
				title: 'Unit test',
				description: 'This is a description',
			},
			{
				name: 'Svelte',
				title: 'Compiler',
				description: 'ANOTHER',
			},
		];
		const tabsMap = new Map(tabs.map((tab) => [tab.name, tab]));

		let container: HTMLElement;

		beforeEach(() => {
			container = render(TabSectionSlot, {
				props: {
					component: TabSection,
					data: tabsMap,
				},
			}).container;
		});

		it('should render tabs', () => {
			expect(container.querySelector(selectors.tabContent)).toBeInTheDocument();
			expect(container.querySelectorAll(selectors.tabsItem)).toHaveLength(tabs.length);
			tabs.forEach((tab) => {
				expect(screen.getByText(tab.name)).toBeInTheDocument();
			});
		});

		it('should render the first tab as active', () => {
			const [firstTabElement] = container.querySelectorAll(selectors.tabsItem);
			const [firstTab] = tabs;
			expect(firstTabElement).toHaveClass(modifiers.active);

			expect(screen.getByText(firstTab.title)).toBeInTheDocument();
			expect(screen.getByText(firstTab.description)).toBeInTheDocument();
		});

		it('should render the second tab when tab title is clicked', async () => {
			const user = userEvent.setup();
			const [, secondTabElement] = container.querySelectorAll(selectors.tabsItem);
			const [, secondTab] = tabs;

			await user.click(secondTabElement);
			expect(secondTabElement).toHaveClass(modifiers.active);

			expect(screen.getByText(secondTab.title)).toBeInTheDocument();
			expect(screen.getByText(secondTab.description)).toBeInTheDocument();
		});
	});
});
