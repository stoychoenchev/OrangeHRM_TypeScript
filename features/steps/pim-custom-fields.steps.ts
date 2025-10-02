import { Given, When, Then, setDefaultTimeout, Before, After } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { chromium } from '@playwright/test';
import type { Browser, Page } from '@playwright/test';
import { PimPage } from '../../pages/PimPage';
import { LoginPage } from '../../pages/LoginPage';

let browser: Browser;
let page: Page;
let pimPage: PimPage;
let loginPage: LoginPage;

setDefaultTimeout(60 * 1000);

Before({ tags: '@customfields' }, async function () {
  browser = await chromium.launch({ headless: true });
  page = await browser.newPage();
  loginPage = new LoginPage(page);
  await loginPage.navigateToPage();
  await loginPage.login();
  pimPage = new PimPage(page);
});

After({ tags: '@customfields' }, async function () {
  if (browser && pimPage) {
    await pimPage.deleteAllCustomFields();
    await expect(pimPage.successDelete).toBeVisible({ timeout: 10000 });
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

When('Admin adds a new DropDown Custom Field with {string} on {string} with options {string}', async function (fieldName: string, screen: string, selectOptions: string) {
  await pimPage.addDropdownCustomField(fieldName, screen, selectOptions);
});

When('Admin adds a new Text or Number Custom Field', async function (dataTable) {
  const rows = dataTable.hashes();
  for (const row of rows) {
    await pimPage.addTextOrNumberCustomField(row['Field Name'], row['Screen']);
  }
});

When('Admin adds a new Text or Number Custom Field with {string} on {string}', async function (fieldName: string, screen: string) {
  await pimPage.addTextOrNumberCustomField(fieldName, screen);
});

Then('the custom field is created successfully', async function () {
  await expect(pimPage.successAssertion).toBeVisible();
});

