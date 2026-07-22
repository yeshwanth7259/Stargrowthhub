import { test as setup, expect } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
  await page.goto('http://localhost:5173/auth');
  await page.fill('input[type="email"]', 'admin@example.com');
  await page.fill('input[type="password"]', 'password123');
  await page.getByRole('button', { name: /Login to Portal/i }).click();
  await expect(page).toHaveURL(/.*portal/);
  await page.context().storageState({ path: authFile });
});
