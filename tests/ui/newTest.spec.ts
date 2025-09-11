import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage.js';
import { PimPage } from '../../pages/PimPage.js';
import { generateEmployeeData } from '../../utils/employeeDataUtil.js';

test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page)
    await login.navigateToPage();
    await expect(page).toHaveTitle('OrangeHRM');
    await login.login();
});

test('Add an employee PIM Page', async ({ page }) => {
    const pim = new PimPage(page);
    const data = generateEmployeeData();
    await pim.navigateToPimPage();
    await expect(pim.pimTextAssertion).toHaveText("PIM");
    await pim.PimPageAddEmployee(data.firstName, data.middleName, data.lastName, data.employeeId);
    const successMessage = page.getByText('Success', { exact: true });
    await expect(successMessage).toBeVisible({ timeout: 10000 });
});

test('Search for employee and edit', async ({ page }) => {
    const pim = new PimPage(page);
    const data = generateEmployeeData();
    await pim.navigateToPimPage();
    await pim.PimPageAddEmployee(data.firstName, data.middleName, data.lastName, data.employeeId);
    await expect(page.getByText('Success', { exact: true })).toBeVisible({ timeout: 10000 });

    await pim.searchAndEditForEmployee(data.firstName, data.newFirstName);
    await expect(page.getByText('Successfully Updated')).toBeVisible({ timeout: 10000 });
});

test('Search for employee and delete', async ({ page }) => {
    const pim = new PimPage(page);
    const data = generateEmployeeData();
    await pim.navigateToPimPage();
    await pim.PimPageAddEmployee(data.firstName, data.middleName, data.lastName, data.employeeId);
    await expect(page.getByText('Success', { exact:
         true })).toBeVisible({ timeout: 10000 });

    await pim.searchAndDeleteForEmployee(data.firstName);
    await expect(page.getByText('Successfully Deleted')).toBeVisible({ timeout: 10000 });
});