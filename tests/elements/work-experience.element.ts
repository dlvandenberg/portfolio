import { expect, Locator, Page } from '@playwright/test';

export class WorkExperienceElement {
	private readonly page: Page;
	public readonly tabsList: Locator;
	public readonly jobTitle: Locator;
	public readonly jobCompany: Locator;
	public readonly jobPeriod: Locator;
	public readonly jobDescription: Locator;
	public readonly jobSkills: Locator;
	public readonly tabContent: Locator;

	constructor(page: Page) {
		this.page = page;
		this.tabsList = this.page.locator('.tabs-list-item');
		this.jobTitle = this.page.locator('.job-title');
		this.jobCompany = this.page.locator('.job-location');
		this.jobPeriod = this.page.locator('.job-period > p');
		this.jobDescription = this.page.locator('.job-description > .md-wrapper');
		this.jobSkills = this.page.locator('.job-tags > .skill-item');
		this.tabContent = this.page.locator('.tab-content');
	}

	public async clickTab(tabTitle: string): Promise<void> {
		await this.tabsList.filter({ hasText: tabTitle }).first().click();
	}

	public async jobCompanyText(): Promise<string> {
		return await this.jobCompany.textContent();
	}

	public async waitForTabLoad(): Promise<void> {
		// Svelte animates the tab-switch. During the animation, two tab-contents (with elements) are in the DOM.
		await expect(this.tabContent).toHaveCount(1);
	}

	public async jobTitleText(): Promise<string> {
		return await this.jobTitle.textContent();
	}
}
