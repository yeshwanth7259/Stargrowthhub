import { test, expect } from '@playwright/test';

test('Homepage visual regression test', async ({ page }) => {
  await page.goto('/');
  // Wait for framer motion animations to finish
  await page.waitForTimeout(3000);
  await expect(page).toHaveScreenshot('homepage.png', { maxDiffPixels: 1000 });
});
