import { expect, test } from '@playwright/test';

test.describe('Navigation bar', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
	});

	test('should have "about" as default active page', async ({ page }) => {
		expect(await page.locator('.nav-menu-item .active').textContent()).toBe('about');
	});

	test('should dissapear/appear on scroll down/up', async ({ page }) => {
		expect(await page.locator('.header').isVisible()).toBe(true);
		expect(await page.locator('.header')).toHaveClass(/show/);

		// Somehow this works only in combination with page.mouse.wheel()
		await page.evaluate(() => window.scrollBy(0, 1000));
		await page.mouse.wheel(0, 1000);

		expect(await page.locator('.header')).toHaveClass(/hide/);

		await page.evaluate(() => window.scrollBy(0, -1000));
		await page.mouse.wheel(0, -1000);
		expect(await page.locator('.header')).toHaveClass(/show/);
	});

	test('should not have the menu toggle on desktop', async ({ page }) => {
		expect(await page.locator('.nav-toggle').isHidden()).toBe(true);
	});
});

test.describe('Small viewport header', () => {
	test.use({
		viewport: { width: 600, height: 900 },
	});

	test.beforeEach(async ({ page }) => {
		await page.goto('/');
	});

	test('should have the menu toggle', async ({ page }) => {
		expect(await page.locator('.nav-toggle').isVisible()).toBe(true);
	});

	test('should open/close the menu when toggle is clicked', async ({ page }) => {
		expect(page.locator('.nav-collapse')).not.toHaveClass(/show/);
		expect(page.locator('.nav-toggle')).not.toHaveClass(/active/);
		await page.locator('.nav-toggle').click();

		expect(page.locator('.nav-collapse')).toHaveClass(/show/);
		expect(page.locator('.nav-toggle')).toHaveClass(/active/);

		await page.locator('.nav-toggle').click();
		expect(page.locator('.nav-collapse')).not.toHaveClass(/show/);
		expect(page.locator('.nav-toggle')).not.toHaveClass(/active/);
	});
});
