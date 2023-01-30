import { render, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import TabSection from './tab-section.svelte';
import TabSectionSlot from './__tests__/tab-section-slot.svelte';

describe('TabSection.svelte', () => {
	const testIds = {
		tabs: 'tabs',
		tabsItem: 'tabs-item',
		tabContent: 'tab-content',
	};

	const modifiers = {
		active: '-active',
	};

	it('should not render anything when tabData is empty', () => {
		render(TabSection, { tabData: new Map() });
		expect(screen.queryByTestId(testIds.tabs)).not.toBeInTheDocument();
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

		beforeEach(() => {
			render(TabSectionSlot, {
				props: {
					component: TabSection,
					data: tabsMap,
				},
			});
		});

		it('should render tabs', () => {
			expect(screen.queryByTestId(testIds.tabContent)).toBeInTheDocument();
			expect(screen.queryAllByTestId(testIds.tabsItem)).toHaveLength(tabs.length);
			tabs.forEach((tab) => {
				expect(screen.getByText(tab.name)).toBeInTheDocument();
			});
		});

		it('should render the first tab as active', () => {
			const [firstTabElement] = screen.queryAllByTestId(testIds.tabsItem);
			const [firstTab] = tabs;
			expect(firstTabElement).toHaveClass(modifiers.active);

			expect(screen.getByText(firstTab.title)).toBeInTheDocument();
			expect(screen.getByText(firstTab.description)).toBeInTheDocument();
		});

		it('should render the second tab when tab title is clicked', async () => {
			const user = userEvent.setup();
			const [, secondTabElement] = screen.queryAllByTestId(testIds.tabsItem);
			const [, secondTab] = tabs;

			await user.click(secondTabElement);
			expect(secondTabElement).toHaveClass(modifiers.active);

			expect(screen.getByText(secondTab.title)).toBeInTheDocument();
			expect(screen.getByText(secondTab.description)).toBeInTheDocument();
		});
	});
});
