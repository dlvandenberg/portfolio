import { NavigationBarElement } from '@elements/navigation-bar.element';
import { expect, test } from '@playwright/test';

test.describe('Navigation bar', () => {
	let navigationBar: NavigationBarElement;

	test.beforeEach(async ({ page }) => {
		navigationBar = new NavigationBarElement(page);
		await page.goto('/');
	});

	test('should have "about" as default active page', async () => {
		await expect(navigationBar.header).toBeVisible();
		expect(await navigationBar.activeLinkText()).toBe('about');
	});

	test('should dissapear/appear on scroll down/up', async ({ page }) => {
		await expect(navigationBar.header).toBeVisible();
		await expect(navigationBar.header).toHaveClass(/-visible/);

		await page.mouse.wheel(0, 1000);

		await expect(navigationBar.header).toHaveClass(/-hidden/);

		await page.mouse.wheel(0, -1000);
		await expect(navigationBar.header).toHaveClass(/-visible/);
	});

	test('should not have the menu toggle on desktop', async () => {
		expect(navigationBar.menuToggle).toBeHidden();
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
		expect(navigationBar.menuToggle).toBeVisible();
	});

	test('should open/close the menu when toggle is clicked', async () => {
		expect(navigationBar.menu).not.toHaveClass(/-visible/);
		expect(navigationBar.menuToggle).not.toHaveClass(/-active/);

		await navigationBar.clickMenu();
		expect(navigationBar.menu).toHaveClass(/-visible/);
		expect(navigationBar.menuToggle).toHaveClass(/-active/);

		await navigationBar.clickMenu();
		expect(navigationBar.menu).not.toHaveClass(/-visible/);
		expect(navigationBar.menuToggle).not.toHaveClass(/-active/);
	});
});
