import type { Locator, Page } from '@playwright/test';

export class NavigationBarElement {
	private readonly page: Page;
	public readonly activeLink: Locator;
	public readonly menuToggle: Locator;
	public readonly menu: Locator;
	public readonly header: Locator;
	private readonly menuLinks: Locator;

	constructor(page: Page) {
		this.page = page;
		this.header = page.locator('.header');
		this.activeLink = page.locator('.navbar__item-link.-active');
		this.menuToggle = page.locator('.navbar__toggle');
		this.menu = page.locator('.navbar__collapse');
		this.menuLinks = page.locator('.navbar__item-link');
	}

	public async clickLink(linkText: string): Promise<void> {
		await this.menuLinks.getByText(linkText).click();
	}

	public async activeLinkText(): Promise<string | null> {
		return await this.activeLink.textContent();
	}

	public async clickMenu(): Promise<void> {
		await this.menuToggle.click();
	}
}
