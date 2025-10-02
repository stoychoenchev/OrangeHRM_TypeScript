// import { test, expect } from '@playwright/test';
// import { LoginPage } from '../../pages/LoginPage.js';
// import { PimPage } from '../../pages/PimPage.js';

// test.beforeEach(async ({ page }) => {
//     const login = new LoginPage(page)
//     await login.navigateToPage();
//     await expect(page).toHaveTitle('OrangeHRM');
//     await login.login();
// })


// test('Verify that we are navigated to pim page and successfully adding an employee', async ({ page }) => {
//     const pim = new PimPage(page)
//     await pim.navigateToPimPage();
//     await expect(pim.pimTextAssertion).toHaveText("PIM");
//     await pim.PimPageAddEmployee();
//     const successMessage = page.getByText('Success', { exact: true }); // Example success message locator
//     await expect(successMessage).toBeVisible({ timeout: 100000});
// })

// test('Search for employee', async ({ page }) => {
//     const pim = new PimPage(page)
//     await pim.searchAndEditForEmployee();
//     await expect(page.getByText('Successfully Updated')).toBeVisible({ timeout: 10000});
// })


// test('Verify that the search functionality in PimPage is working as expected', async ({ page }) => {
//     const pim = new PimPage(page)
//     const assertionOfSearch = await pim.searchForUserRole();
// })