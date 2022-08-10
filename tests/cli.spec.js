import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://www.saucedemo.com/
  await page.goto('https://www.saucedemo.com/');

  // Click [data-test="username"]
  await page.locator('[data-test="username"]').click();

  // Fill [data-test="username"]
  await page.locator('[data-test="username"]').fill('standard_user');

  // Click [data-test="password"]
  await page.locator('[data-test="password"]').click();

  // Fill [data-test="password"]
  await page.locator('[data-test="password"]').fill('secret_sauce');

  // Press Enter
  await page.locator('[data-test="password"]').press('Enter');
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

});