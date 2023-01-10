import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	page.goto('/');
});

test('should navigate to "about" via navbar', async ({ page, baseURL }) => {
	await page.locator('.nav-menu-item').first().click();

	expect(await page.url()).toBe(`${baseURL}/`);
	expect(await page.locator('.nav-menu-item .active').textContent()).toBe('about');
});
