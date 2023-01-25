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
		this.tabsList = this.page.locator('.tabs__item');
		this.jobTitle = this.page.locator('.job__title');
		this.jobCompany = this.page.locator('.job__company');
		this.jobPeriod = this.page.locator('.job__period');
		this.jobDescription = this.page.locator('.job__description > md-wrapper');
		this.jobSkills = this.page.locator('.job__tags > .skill__item');
		this.tabContent = this.page.locator('.tab__content');
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
