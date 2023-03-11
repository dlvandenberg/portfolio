import { WorkExperienceElement } from '@elements/work-experience.element';
import { HomePage } from '@pages/home.page';
import { expect, test } from '@playwright/test';

test.describe('WorkExperience', () => {
	let homePage: HomePage;
	let workExperienceElement: WorkExperienceElement;

	test.beforeEach(async ({ page }) => {
		homePage = new HomePage(page);
		workExperienceElement = homePage.workExperience;
		await page.waitForLoadState('load', { timeout: 30000 });
		await homePage.goto();
	});

	test('should show work experience as tabs and the first one should be selected', async () => {
		expect(await workExperienceElement.tabsList.all()).toHaveLength(6);
		expect(workExperienceElement.tabsList.first()).toHaveClass(/-active/);

		expect(await workExperienceElement.jobCompanyText()).toEqual('@ Nedap Security Management');
		expect(await workExperienceElement.jobTitleText()).toEqual('Frontend Developer');
	});

	test('should show work experience when tab is clicked', async () => {
		await workExperienceElement.clickTab('Carthago ICT');
		expect(workExperienceElement.tabsList.nth(1)).toHaveClass(/-active/);
		await workExperienceElement.waitForTabLoad();

		expect(await workExperienceElement.jobCompanyText()).toEqual('@ Carthago ICT');
		expect(await workExperienceElement.jobTitleText()).toEqual('IT Consultant');
	});
});
