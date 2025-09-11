import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { chromium } from '@playwright/test';
import type { Browser, Page } from '@playwright/test';
import { PimPage } from '../../pages/PimPage.js';
import { LoginPage } from '../../pages/LoginPage.js';

let browser: Browser;
let page: Page;
let pimPage: PimPage;
let loginPage: LoginPage;
setDefaultTimeout(60 * 1000);

Given('Admin is on Termination Reasons', async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  pimPage = new PimPage(page); 
  loginPage = new LoginPage(page);
  await loginPage.navigateToPage();
  await loginPage.login();
  await pimPage.navigateToPimPage();
});

When('Admin adds a new Termination Reason', async function () {
      pimPage = new PimPage(page); 

    await pimPage.addTerminationReason();
});

Then('the termination reason is created successfully', async function () {
  pimPage = new PimPage(page); 
  await expect(pimPage.successButton).toBeVisible();
  await browser.close();
});