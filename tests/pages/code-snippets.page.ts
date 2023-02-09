import { Locator, Page } from '@playwright/test';

export class CodeSnippetsPage {
	private readonly page: Page;

	public readonly title: Locator;
	public readonly item: Locator;
	public readonly readMoreLink: Locator;
	public readonly itemTitle: Locator;
	public readonly itemDate: Locator;
	public readonly itemDescription: Locator;

	constructor(page: Page) {
		this.page = page;
		this.title = page.getByTestId('item-list-title');
		this.item = page.getByTestId('item');
		this.readMoreLink = page.getByTestId('read-more-link');
		this.itemTitle = page.getByTestId('item-title');
		this.itemDate = page.getByTestId('item-date');
		this.itemDescription = page.getByTestId('item-description');
	}

	public async goto(): Promise<void> {
		await this.page.goto('/code-snippets');
	}
}
