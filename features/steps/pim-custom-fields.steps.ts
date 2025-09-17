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

Before(async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  loginPage = new LoginPage(page);
  await loginPage.navigateToPage();
  await loginPage.login();
  pimPage = new PimPage(page);
});

After(async function () {
  if (browser) {
    await browser.close();
  }
});

Given('Admin is on Custom Fields', async function () {
  await pimPage.navigateToPimPage();
  await pimPage.configurationButton.click();
  await pimPage.customFieldsButton.click();
});

When('Admin adds a new DropDown Custom Field', async function (dataTable) {
  const rows = dataTable.hashes();
  for (const row of rows) {
    await pimPage.addDropdownCustomField(
      row['Field Name'],
      row['Screen'],
      row['Select Options']
    );
  }
});

When('Admin adds a new Text or Number Custom Field', async function (dataTable) {
  const rows = dataTable.hashes();
  for (const row of rows) {
    await pimPage.addTextOrNumberCustomField(row['Field Name'], row['Screen']);
  }
});

Then('the custom field is created successfully', async function () {
  await expect(pimPage.successButton).toBeVisible();
});

