import type { Locator, Page } from '@playwright/test';

export class NavigationBarElement {
	private readonly page: Page;
	private readonly activeLink: Locator;
	public readonly menuToggle: Locator;
	public readonly menu: Locator;
	public readonly header: Locator;
	private readonly menuLinks: Locator;

	constructor(page: Page) {
		this.page = page;
		this.header = page.locator('.header');
		this.activeLink = page.locator('.nav-menu-item .active');
		this.menuToggle = page.locator('.nav-toggle');
		this.menu = page.locator('.nav-collapse');
		this.menuLinks = page.locator('.nav-menu-item');
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
