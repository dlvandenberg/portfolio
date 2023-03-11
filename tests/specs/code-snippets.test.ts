import { CodeSnippetsPage } from '@pages/code-snippets.page';
import { expect, test } from '@playwright/test';

test.describe('CodeSnippets', () => {
	let codeSnippetsPage: CodeSnippetsPage;

	test.beforeEach(async ({ page }) => {
		codeSnippetsPage = new CodeSnippetsPage(page);
		await page.waitForLoadState('load', { timeout: 30000 });
		await codeSnippetsPage.goto();
	});

	test.describe('when API responds with a list', () => {
		const codeSnippets = [
			{
				title: 'Vitest',
				description: 'This is a short description',
				tags: ['Angular', 'TypeScript'],
				slug: '/snippet-1',
			},
		];

		test.beforeEach(async ({ page }) => {
			await page.route('http://localhost:4173/api/code-snippets/', async (route) => {
				console.log('hello from code-snippets');
				const json = codeSnippets;
				await route.fulfill({ json });
			});
		});

		test('should show list of code snippets', async () => {
			expect(codeSnippetsPage.title).toHaveText('code_snippets()');
			// expect(codeSnippetsPage.itemTitle).toHaveText(['Vitest']);
		});
	});
});
