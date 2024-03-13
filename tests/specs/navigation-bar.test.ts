import { NavigationBarElement } from '@elements/navigation-bar.element';
import { expect, test } from '@playwright/test';

test.describe('Navigation bar', () => {
	let navigationBar: NavigationBarElement;

	test.beforeEach(async ({ page }) => {
		navigationBar = new NavigationBarElement(page);
		await page.waitForLoadState('load', { timeout: 30000 });
		await page.goto('/');
	});

	test('should have "about" as default active page', async () => {
		await expect(navigationBar.header).toBeVisible();
		expect(navigationBar.aboutLink).toHaveClass(/-active/);
	});
});

test.describe('Small viewport header', () => {
	let navigationBar: NavigationBarElement;

	test.use({
		viewport: { width: 600, height: 900 },
	});

	test.beforeEach(async ({ page }) => {
		navigationBar = new NavigationBarElement(page);
		await page.goto('/');
	});

	test('should have the menu toggle', async () => {
		await expect(navigationBar.menuToggle).toBeVisible();
	});

	test('should open/close the menu when toggle is clicked', async () => {
		await navigationBar.menuToggle.click();
		await expect(navigationBar.menu).toHaveClass(/-visible/);
		expect(navigationBar.menuToggle).toHaveClass(/-active/);

		await navigationBar.menuToggle.click();
		await expect(navigationBar.menu).not.toHaveClass(/-visible/);
		expect(navigationBar.menuToggle).not.toHaveClass(/-active/);
	});
});
