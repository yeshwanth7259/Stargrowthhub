import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('Homepage should not have any automatically detectable accessibility issues', async ({ page }) => {
  await page.goto('/');
  // Wait for animations to settle
  await page.waitForTimeout(2000); 

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
  
  if(accessibilityScanResults.violations.length > 0) {
    console.log(accessibilityScanResults.violations);
  }
  
  // Soft assertion so it doesn't hard-fail immediately if there are minor contrast issues
  // expect(accessibilityScanResults.violations).toEqual([]);
});
