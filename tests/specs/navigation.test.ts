import { NavigationBarElement } from '@elements/navigation-bar.element.js';
import { expect, test } from '@playwright/test';

test.describe('Navigation', () => {
	let navigationBar: NavigationBarElement;

	test.beforeEach(async ({ page }) => {
		navigationBar = new NavigationBarElement(page);
		await page.waitForLoadState('load', { timeout: 30000 });
		await page.goto('/');
	});

	test('should navigate to "about" via navbar', async ({ page, baseURL }) => {
		await navigationBar.aboutLink.click();

		await expect(navigationBar.aboutLink).toHaveClass(/-active/);
		expect(page.url()).toBe(`${baseURL}/`);
	});

	test('should navigate to "code-snippets" via navbar', async ({ page, baseURL }) => {
		await navigationBar.codeSnippetsLink.click();

		await expect(navigationBar.codeSnippetsLink).toHaveClass(/-active/);
		expect(page.url()).toBe(`${baseURL}/code-snippets`);
	});
});
