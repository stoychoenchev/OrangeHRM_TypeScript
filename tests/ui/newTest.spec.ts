// import { test, expect, chromium } from '@playwright/test';
// import { LoginPage } from '../../pages/LoginPage.js';
// import { MyInfoPage } from '../../pages/MyInfoPage.js';
// import { PimPage } from '../../pages/PimPage.js';
// import { generateEmployeeData } from '../../utils/employeeDataUtil.js';


// const dropdownRows = [
//   { fieldName: 'Blood Type', screen: 'Personal Details', selectOptions: 'A+,A-' },
//   { fieldName: 'ICE Contact', screen: 'Emergency Contacts', selectOptions: 'Mom,Dad' },
//   { fieldName: 'Allergy', screen: 'Dependents', selectOptions: 'Penicillin,Peanuts' },
//   { fieldName: 'Language', screen: 'Immigration', selectOptions: 'English,French' },
//   { fieldName: 'Relation', screen: 'Dependents', selectOptions: 'Father,Mother' },
// ];

// const textRows = [
//   { fieldName: '1', screen: 'Contact Details' },
//   { fieldName: '0869361190', screen: 'Emergency Contacts' },
//   { fieldName: '1530313610316036019390163169036', screen: 'Immigration' },
//   { fieldName: 'S*Pe,CiAl_Tx10-!.', screen: 'Dependents' },
// ];

// test.beforeEach(async ({ page }) => {
//     const login = new LoginPage(page)
//     await login.navigateToPage();
//     await expect(page).toHaveTitle('OrangeHRM');
//     await login.login();
// });

// test.afterAll(async () => {
//   const browser = await chromium.launch();
//   const context = await browser.newContext();
//   const page = await context.newPage();
//   const login = new LoginPage(page);
//   const pimPage = new PimPage(page);

//   await login.navigateToPage();
//   await login.login();
//   await pimPage.navigateToPimPage();
//   await pimPage.configurationButton.click();
//   await pimPage.customFieldsButton.click();
//   await pimPage.deleteAllCustomFields();
//   await expect(pimPage.successDelete).toBeVisible({ timeout: 20000 });

//   await browser.close();
// });

// // test('Add an employee PIM Page', async ({ page }) => {
// //     const pim = new PimPage(page);
// //     const data = generateEmployeeData();
// //     await pim.navigateToPimPage();
// //     await expect(pim.pimTextAssertion).toHaveText("PIM");
// //     await pim.PimPageAddEmployee(data.firstName, data.middleName, data.lastName, data.employeeId);
// //     const successMessage = page.getByText('Success', { exact: true });
// //     await expect(successMessage).toBeVisible({ timeout: 10000 });
// // });

// // test('Search for employee and edit', async ({ page }) => {
// //     const pim = new PimPage(page);
// //     const data = generateEmployeeData();
// //     await pim.navigateToPimPage();
// //     await pim.PimPageAddEmployee(data.firstName, data.middleName, data.lastName, data.employeeId);
// //     await expect(page.getByText('Success', { exact: true })).toBeVisible({ timeout: 10000 });

// //     await pim.searchAndEditForEmployee(data.firstName, data.newFirstName);
// //     await expect(page.getByText('Successfully Updated')).toBeVisible({ timeout: 10000 });
// // });

// // test('Search for employee and delete', async ({ page }) => {
// //     const pim = new PimPage(page);
// //     const data = generateEmployeeData();
// //     await pim.navigateToPimPage();
// //     await pim.PimPageAddEmployee(data.firstName, data.middleName, data.lastName, data.employeeId);
// //     await expect(page.getByText('Success', { exact:
// //          true })).toBeVisible({ timeout: 10000 });

// //     await pim.searchAndDeleteForEmployee(data.firstName);
// //     await expect(page.getByText('Successfully Deleted')).toBeVisible({ timeout: 10000 });
// // });


// test.describe('PIM Custom Fields', () => {
//   for (const row of dropdownRows) {
//     test(`Add DropDown Custom Field - ${row.fieldName}`, async ({ page }) => {
//         const pim = new PimPage(page);
//         await pim.navigateToPimPage();
//         await pim.configurationButton.click();
//         await pim.customFieldsButton.click();
//         await pim.addDropdownCustomField(row.fieldName, row.screen, row.selectOptions);
//         await expect(pim.successAssertion).toBeVisible({ timeout: 10000 });   
//     });
//   }

//   for (const row of textRows) {
//     test(`Add TextOrNumber Custom Field - ${row.fieldName}`, async ({ page }) => {
//         const pim = new PimPage(page);
//         await pim.navigateToPimPage();
//         await pim.configurationButton.click();
//         await pim.customFieldsButton.click();
//         await pim.addTextOrNumberCustomField(row.fieldName, row.screen);
//         await expect(pim.successAssertion).toBeVisible({ timeout: 10000 });
//     });
//   }
// });

// test('Enable Show Deprecated Fields and verify fields are visible', async ({ page }) => {
//     const pimPage = new PimPage(page);
//     const myInfoPage = new MyInfoPage(page);

//     // Go to Optional Fields
//     await pimPage.navigateToPimPage();
//     await pimPage.configurationButton.click();
//     await pimPage.optionalFieldsButton.click();

//     // Enable the switch and save
//     await pimPage.showDeprecatedFields.click();
//     await pimPage.genericSaveButton.click();
//     await expect(pimPage.successAssertion).toBeVisible();

// });


// // test('Disable Show Deprecated Fields and verify fields are NOT visible', async ({ page }) => {
// //     const pimPage = new PimPage(page);
// //     const myInfoPage = new MyInfoPage(page);

// //     // Go to Optional Fields
// //     await pimPage.navigateToPimPage();
// //     await pimPage.configurationButton.click();
// //     await pimPage.optionalFieldsButton.click();

// //     // Disable the switch and save
// //     await pimPage.showDeprecatedFields.uncheck();
// //     await pimPage.genericSaveButton.click();
// //     await expect(pimPage.successAssertion).toBeVisible();

// //     // Go to My Info and verify fields are not visible
// //     await myInfoPage.myInfoButton.click();
// //     await myInfoPage.assertDeprecatedFieldsAreNotVisible();
// // });