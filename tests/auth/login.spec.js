import { test, expect } from '@playwright/test';

test.describe('Authentication', () => {
  test('session reuse is working, should be logged in and redirect to portal', async ({ page }) => {
    // Because we used global setup to login and saved storage state, 
    // going to an authenticated route or the portal directly should work
    await page.goto('/portal');
    await expect(page).toHaveURL(/.*portal/);
  });
});
