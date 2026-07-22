import { test, expect } from '@playwright/test';

test('Contact form validation', async ({ page }) => {
  await page.goto('/contact');
  // Find a submit button inside the contact form
  const submitButton = page.locator('button[type="submit"]').first();
  await submitButton.click();
  
  const isInvalid = await page.evaluate(() => {
    const input = document.querySelector('input[required]');
    return input && !input.validity.valid;
  });
  
  expect(isInvalid).toBeTruthy();
});
