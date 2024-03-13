import type { Locator, Page } from '@playwright/test';

export class NavigationBarElement {
	private readonly page: Page;
	public readonly activeLink: Locator;
	public readonly menuToggle: Locator;
	public readonly menu: Locator;
	public readonly header: Locator;

	public readonly aboutLink: Locator;
	public readonly blogLink: Locator;

	public readonly activeClass = '-active';

	constructor(page: Page) {
		this.page = page;
		this.header = page.getByTestId('header');
		this.menuToggle = page.getByTestId('navbar-toggle');

		this.menu = page.getByTestId('navbar-menu');

		this.aboutLink = page.getByTestId('navbar-link-about');
		this.blogLink = page.getByTestId('navbar-link-blog');
	}
}
