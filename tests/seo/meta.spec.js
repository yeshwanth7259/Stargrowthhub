import { test, expect } from '@playwright/test';

test('Homepage has correct SEO metadata', async ({ page }) => {
  await page.goto('/');
  const title = await page.title();
  expect(title).not.toBe('');
});
