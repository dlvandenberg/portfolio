import { BlogPage } from '@pages/blog.page';
import { expect, test } from '@playwright/test';

test.describe('BlogPage', () => {
	let blogPage: BlogPage;

	test.beforeEach(async ({ page }) => {
		blogPage = new BlogPage(page);
		await page.waitForLoadState('load', { timeout: 30000 });
		await blogPage.goto();
	});

	test.describe('when API responds with a list', () => {
		const blogPosts = [
			{
				title: 'Vitest',
				description: 'This is a short description',
				tags: ['Angular', 'TypeScript'],
				slug: '/snippet-1',
			},
		];

		test.beforeEach(async ({ page }) => {
			await page.route('http://localhost:4173/api/blog-posts/', async (route) => {
				const json = blogPosts;
				await route.fulfill({ json });
			});
		});

		test('should show list of blog posts', async () => {
			expect(blogPage.title).toHaveText('blog_posts()');
			// expect(codeSnippetsPage.itemTitle).toHaveText(['Vitest']);
		});
	});
});
