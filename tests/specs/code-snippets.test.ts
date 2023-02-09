import { CodeSnippetsPage } from '@pages/code-snippets.page';
import { expect, test } from '@playwright/test';

test.describe('CodeSnippets', () => {
	let codeSnippetsPage: CodeSnippetsPage;

	test.beforeEach(async ({ page }) => {
		codeSnippetsPage = new CodeSnippetsPage(page);
		await codeSnippetsPage.goto();
	});

	test('should show list of code snippets', async () => {
		expect(codeSnippetsPage.title).toHaveText('code_snippets()');
	});
});
