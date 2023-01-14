import { WorkExperienceElement } from '@elements/work-experience.element.js';
import type { Page } from '@playwright/test';
import { NavigationBarElement } from '../elements/navigation-bar.element.js';

export class HomePage {
	private readonly page: Page;

	public readonly header: NavigationBarElement;
	public readonly workExperience: WorkExperienceElement;

	constructor(page: Page) {
		this.page = page;
		this.header = new NavigationBarElement(page);
		this.workExperience = new WorkExperienceElement(page);
	}

	public async goto(): Promise<void> {
		await this.page.goto('/');
	}
}
