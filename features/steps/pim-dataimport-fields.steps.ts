import { Given, When, Then, setDefaultTimeout, Before, After } from '@cucumber/cucumber';
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

Before(async function (this: any) {
  browser = await chromium.launch({ headless: true });
  page = await browser.newPage();
  loginPage = new LoginPage(page);
  await loginPage.navigateToPage();
  await loginPage.login();
  pimPage = new PimPage(page);
});

After(async function (this: any) {
  if (browser) {
    await browser.close();
  }
});

Given('Admin is on Data Import', async function () {
  await pimPage.navigateToPimPage();
  await pimPage.configurationButton.click();
  await pimPage.dataImportButton.click();
});

When('Admin uploads file {string}', async function (fileName: string) {
  await pimPage.uploadFile(fileName);
});

Then('all employees from the file should appear in the Employee List', async function () {
  await expect(pimPage.successUploadMsg).toHaveText(/Successfully Imported/i, { timeout: 10000 });
});
