import type { Page, Locator } from '@playwright/test';

export class PimPage {
    page: Page;
    pimBtn: Locator;
    pimAddbutton: Locator;
    pimTextAssertion: Locator;
    pimFirstNameField: Locator;
    pimMiddleNameField: Locator;
    pimLastNameField: Locator;
    pimSaveButton: Locator;
    pimEmployeerName: Locator;
    employeeNameField: Locator;
    matchedName: Locator;
    employeeId: Locator;
    employeeName: Locator;
    employeeNameFilled: Locator;
    searchButton: Locator;
    configurationButton: Locator;
    terminationReasonsButton: Locator;
    addButton: Locator;
    nameField: Locator;
    genericSaveButton: Locator;
    successButton: Locator;
    terminationReason: Locator;
    deleteButton: Locator;
    successDelete: Locator;
    customFieldsButton: Locator;
    customNameFieldInput: Locator;
    screenCustomField: Locator;
    typeCustomField: Locator;
    selectOptionsInput: Locator;
    constructor(page: Page) {
        this.page = page;
        this.pimBtn = page.getByRole('link', { name: 'PIM' });
        this.pimAddbutton = page.locator(".oxd-icon.bi-plus.oxd-button-icon");
        this.pimTextAssertion = page.locator(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module");
        this.pimFirstNameField = page.locator("input[placeholder='First Name']");
        this.pimMiddleNameField = page.locator("input[placeholder='Middle Name']");
        this.pimLastNameField = page.locator("input[placeholder='Last Name']");
        this.pimSaveButton = page.locator("button[type='submit']");
        this.pimEmployeerName = page.locator(".orangehrm-edit-employee-name");
        this.employeeNameField = page.locator(".oxd-input-group")
            .filter({ has: page.getByText('Employee Name') })
            .locator("input[placeholder='Type for hints...']");
        this.matchedName = page.locator('div.oxd-table-cell:has-text("Test Testov")');
        this.employeeId = page.locator("div[class='oxd-input-group oxd-input-field-bottom-space'] div input[class='oxd-input oxd-input--active']");
        this.employeeName = page.getByPlaceholder('Type for hints...');
        this.employeeNameFilled = page.getByRole('option').first();
        this.searchButton = page.getByRole('button', { name: 'Search' });
        this.configurationButton = page.getByRole('listitem').filter({ hasText: 'Configuration' });
        this.terminationReasonsButton = page.getByRole('menuitem', { name: 'Termination Reasons' });
        this.addButton = page.getByRole('button', { name: ' Add' });
        this.nameField = page.locator('form').getByRole('textbox');
        this.genericSaveButton = page.getByRole('button', { name: ' Save ' });
        this.successButton = page.getByText('SuccessSuccessfully Saved×');
        this.terminationReason = page.getByRole('row', { name: ' Test_Termination  ' }).getByRole('button').first();
        this.deleteButton = page.getByRole('button', { name: ' Yes, Delete' });
        this.successDelete = page.getByText('SuccessSuccessfully Deleted×');
        this.customFieldsButton = page.getByRole('menuitem', { name: 'Custom Fields' });
        this.customNameFieldInput = page.locator('.oxd-input-group')
  .filter({ has: page.getByText('Field Name') })
  .locator('input.oxd-input');
        this.screenCustomField = page.locator('.oxd-input-group')
  .filter({ has: page.getByText('Screen') })
  .locator('.oxd-select-text-input');
        this.typeCustomField = page.locator('.oxd-input-group')
  .filter({ has: page.getByText('Type') })
  .locator('.oxd-select-text-input');
        this.selectOptionsInput = page.locator('.oxd-input-group')
            .filter({ has: page.getByText('Select Options') })
            .locator('input.oxd-input');
    }

    async navigateToPimPage(): Promise<void> {
        await this.pimBtn.click();
        await this.page.waitForLoadState('networkidle');
    }

    async navigateToTerminationReasons(): Promise<void> {
          await this.page.goto("http://localhost/orangehrm/orangehrm-5.7/web/index.php/pim/viewTerminationReasons")
    }
    async deleteTerminationReason(): Promise<void> {
    await this.terminationReason.click();
    await this.deleteButton.click();
    }

    async fillNameField(reason?: string): Promise<void> {
        const uniqueReason = reason ?? this.generateShortString('Termination_', 20);
        await this.nameField.fill(uniqueReason);
    }

    async fillFieldNameCustomField(fieldName?: string): Promise<void> {
        await this.customNameFieldInput.fill(fieldName ?? '');
    }

    async addTerminationReason(reason?: string): Promise<void> {
    await this.configurationButton.click();
    await this.terminationReasonsButton.click();
    await this.addButton.click();
    await this.fillNameField(reason);
    await this.genericSaveButton.click();
}

    async addDropdownCustomField(fieldName: string, screen: string, options: string): Promise<void> {
        await this.configurationButton.click();
        await this.customFieldsButton.click();
        await this.addButton.click();
        await this.fillFieldNameCustomField(fieldName);
        await this.screenCustomField.click();
        await this.page.getByRole('option', { name: screen }).click();
        await this.typeCustomField.click();
        await this.page.getByRole('option', { name: 'Drop Down' }).click();
        await this.selectOptionsInput.fill(options);
        await this.genericSaveButton.click();
    }

    async addTextOrNumberCustomField(fieldName: string, screen: string): Promise<void> {
        await this.configurationButton.click();
        await this.customFieldsButton.click();
        await this.addButton.click();
        await this.fillFieldNameCustomField(fieldName);
        await this.screenCustomField.click();
        await this.page.getByRole('option', { name: screen }).click();
        await this.typeCustomField.click();
        await this.page.getByRole('option', { name: 'Text or Number' }).click();
        await this.genericSaveButton.click();
    }

    async PimPageAddEmployee(
    firstName: string = "UI",
    middleName: string = "UIev",
    lastName: string = "UIeeev",
    employeeId?: string
): Promise<void> {
    const uniqueId = employeeId ?? `ID${Date.now().toString().slice(-5)}`;
    await this.pimAddbutton.click();
    await this.pimFirstNameField.fill(firstName);
    await this.pimMiddleNameField.fill(middleName);
    await this.pimLastNameField.fill(lastName);
    await this.employeeId.fill(uniqueId);
    await this.pimSaveButton.click();
}


    async searchForUserRole(): Promise<Locator> {
        await this.navigateToPimPage();
        await this.employeeNameField.fill("Koko Koko");
        await this.searchButton.click();
        return this.matchedName;
    }

    async searchAndEditForEmployee(employeeName: string = 'Api Apiev', newFirstName: string = 'EditApi'): Promise<void> {
        await this.navigateToPimPage();
        await this.employeeName.first().click();
        await this.employeeName.first().fill(employeeName);
        await this.page.waitForTimeout(5000);
        await this.employeeNameFilled.click();
        await this.searchButton.click();
        const row = this.page.locator(`div.oxd-table-row:has-text("${employeeName}")`);
        const editButton = row.locator('i.oxd-icon.bi-pencil-fill');
        await editButton.first().click();
        await this.page.getByPlaceholder('First Name').click();
        await this.page.getByPlaceholder('First Name').fill(newFirstName);
        await this.page.locator("//*[@class and contains(concat(' ', normalize-space(@class), ' '), ' oxd-button--secondary ') and (position() = 2)]").click({ timeout: 5000 });
    }

    async searchAndDeleteForEmployee(employeeName: string = 'EditApi'): Promise<void> {
        await this.navigateToPimPage();
        await this.employeeName.first().click();
        await this.employeeName.first().fill(employeeName);
        await this.page.waitForTimeout(5000);
        await this.employeeNameFilled.click();
        await this.searchButton.click();
        const row = this.page.locator(`div.oxd-table-row:has-text("${employeeName}")`);
        const editButton = row.locator('i.oxd-icon.bi-trash');
        await editButton.first().click();
        await this.page.locator('//button[normalize-space()="Yes, Delete"]').click();
    }

    generateShortString(prefix: string, maxLength: number): string {
        const unique = Date.now().toString().slice(-6) + Math.floor(Math.random() * 1000);
        return (prefix + unique).slice(0, maxLength);
    }

    generateEmployeeId(): string {
        return 'ID' + Math.random().toString(36).substring(2, 8).toUpperCase();
    }
}