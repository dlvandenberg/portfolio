import { formatDate } from '$lib/date';
import type { CodeSnippet } from '$lib/model/code-snippet';
import { render, screen } from '@testing-library/svelte';
import { describe, it, vi } from 'vitest';
import ItemList from './item-list.svelte';

vi.mock('$app/stores', async () => {
	const { readable, writable } = await import('svelte/store');
	const getStores = () => ({
		navigating: readable(null),
		page: readable({ url: new URL('http://localhost/test'), params: {} }),
		session: writable(null),
		updated: readable(false),
	});
	const page = {
		subscribe(fn: any) {
			return getStores().page.subscribe(fn);
		},
	};

	return { page };
});

describe('ItemList.svelte', () => {
	const testIds = {
		itemListTitle: 'item-list-title',
		item: 'item',
		readMoreLink: 'read-more-link',
	};

	it('should not render anything when items are empty', () => {
		const items: CodeSnippet[] = [];
		const title = 'Items';

		render(ItemList, { items, title });

		expect(screen.queryByTestId(testIds.itemListTitle)).not.toBeInTheDocument();
	});

	it('should render items', () => {
		const item = {
			title: 'Unit',
			dateAdded: '2020-01-01',
			description: 'Lorem ipsum',
			tags: [],
			slug: 'new-1',
		};
		const title = 'Vitest';

		render(ItemList, { items: [item], title });

		expect(screen.getByText(title)).toBeInTheDocument();
		expect(screen.getByText(item.title)).toBeInTheDocument();
		expect(screen.getByText(`@ ${formatDate(item.dateAdded)}`)).toBeInTheDocument();
		expect(screen.queryByTestId(testIds.readMoreLink)).toHaveAttribute(
			'href',
			'http://localhost/test/new-1',
		);
	});
});
