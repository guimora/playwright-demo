import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { URLS, CREDENTIALS } from '../data/Constants'

test('Login Form', async ({ page }) => {
  await page.goto(URLS.SAUCEDEMOURL);
  const loginPage = new LoginPage(page);
  await loginPage.submitLoginForm(CREDENTIALS.SAUCEDEMOUSER,CREDENTIALS.SAUCEDEMOPASS)
});