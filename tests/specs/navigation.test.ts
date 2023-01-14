import { NavigationBarElement } from '@elements/navigation-bar.element.js';
import { expect, test } from '@playwright/test';

test.describe('Navigation', () => {
	let navigationBar: NavigationBarElement;

	test.beforeEach(async ({ page }) => {
		navigationBar = new NavigationBarElement(page);
		await page.goto('/');
	});

	test('should navigate to "about" via navbar', async ({ page, baseURL }) => {
		await navigationBar.clickLink('about');

		expect(page.url()).toBe(`${baseURL}/`);
		expect(await navigationBar.activeLinkText()).toBe('about');
	});
});
