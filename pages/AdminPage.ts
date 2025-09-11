import type { Page, Locator } from '@playwright/test';

export class AdminPage {
    page: Page;
    adminButton: Locator;
    addButton: Locator;
    formI: Locator;
    formIOption: Locator;
    typeForHints: Locator;
    typeForHintsOption: Locator;
    formIsecond: Locator;
    formEnabled: Locator;
    usernameBox: Locator;
    passwordBox: Locator;
    passwordBoxRepat: Locator;
    saveButton: Locator;
    adminPageText: Locator;
    userRole: Locator;
    userRoleAdmin: Locator;
    searchButton: Locator;
    userManagementButton: Locator;
    userManagementButtonListedItem1: Locator;
    jobButton: Locator;
    jobButtonListedItem1: Locator;
    jobButtonListedItem2: Locator;
    jobButtonListedItem3: Locator;
    jobButtonListedItem4: Locator;
    jobButtonListedItem5: Locator;
    organizationButton: Locator;
    organizationButtonListedItem1: Locator;
    organizationButtonListedItem2: Locator;
    organizationButtonListedItem3: Locator;
    qualificationsButton: Locator;
    qualificationsButtonListedItem1: Locator;
    qualificationsButtonListedItem2: Locator;
    qualificationsButtonListedItem3: Locator;
    qualificationsButtonListedItem4: Locator;
    qualificationsButtonListedItem5: Locator;
    nationalitiesButton: Locator;
    corporateBrandingButton: Locator;
    configurationButton: Locator;
    configurationButtonListedItem1: Locator;
    configurationButtonListedItem2: Locator;
    configurationButtonListedItem3: Locator;
    configurationButtonListedItem4: Locator;
    configurationButtonListedItem5: Locator;
    configurationButtonListedItem6: Locator;
    configurationButtonListedItem7: Locator;
    configurationButtonListedItem8: Locator;
    containerLocator: string;
    rowsArray: string[] | null;
    recordsFoundText: string | null;

    constructor(page: Page) {
        this.page = page;
        this.adminButton = page.getByRole('link', { name: 'Admin' });
        this.addButton = page.getByRole('button', { name: ' Add' });
        this.formI = page.locator('form i').first();
        this.formIOption = page.getByRole('option', { name: 'Admin' });
        this.typeForHints = page.getByPlaceholder('Type for hints...');
        this.typeForHintsOption = page.getByRole('option').first();
        this.formIsecond = page.locator('form i').nth(1);
        this.formEnabled = page.getByRole('option', { name: 'Enabled' });
        this.usernameBox = page.getByRole('textbox').nth(2);
        this.passwordBox = page.getByRole('textbox').nth(3);
        this.passwordBoxRepat = page.getByRole('textbox').nth(4);
        this.saveButton = page.getByRole('button', { name: 'Save' });
        this.adminPageText = page.getByRole('listitem').filter({ hasText: 'User Management' });
        this.userRole = page.locator('form i').first();
        this.userRoleAdmin = page.getByRole('option', { name: 'Admin' });
        this.searchButton = page.getByRole('button', { name: 'Search' });
        this.userManagementButton = page.getByRole('listitem').filter({ hasText: 'User Management' }).locator('i');
        this.userManagementButtonListedItem1 = page.getByRole('listitem').filter({ hasText: /^Users$/ });
        this.jobButton = page.getByRole('listitem').filter({ hasText: 'Job' }).locator('i');
        this.jobButtonListedItem1 = page.getByRole('menuitem', { name: 'Job Titles' });
        this.jobButtonListedItem2 = page.getByRole('menuitem', { name: 'Pay Grades' });
        this.jobButtonListedItem3 = page.getByRole('menuitem', { name: 'Employment Status' });
        this.jobButtonListedItem4 = page.getByRole('menuitem', { name: 'Job Categories' });
        this.jobButtonListedItem5 = page.getByRole('menuitem', { name: 'Work Shifts' });
        this.organizationButton = page.getByRole('listitem').filter({ hasText: 'Organization' }).locator('i');
        this.organizationButtonListedItem1 = page.getByRole('menuitem', { name: 'General Information' });
        this.organizationButtonListedItem2 = page.getByRole('menuitem', { name: 'Locations' });
        this.organizationButtonListedItem3 = page.getByRole('menuitem', { name: 'Structure' });
        this.qualificationsButton = page.getByRole('listitem').filter({ hasText: 'Qualifications' }).locator('i');
        this.qualificationsButtonListedItem1 = page.getByRole('menuitem', { name: 'Skills' });
        this.qualificationsButtonListedItem2 = page.getByRole('menuitem', { name: 'Education' });
        this.qualificationsButtonListedItem3 = page.getByRole('menuitem', { name: 'Licenses' });
        this.qualificationsButtonListedItem4 = page.getByRole('menuitem', { name: 'Languages' });
        this.qualificationsButtonListedItem5 = page.getByRole('menuitem', { name: 'Memberships' });
        this.nationalitiesButton = page.getByRole('link', { name: 'Nationalities' });
        this.corporateBrandingButton = page.getByRole('link', { name: 'Corporate Branding' });
        this.configurationButton = page.getByRole('listitem').filter({ hasText: 'Configuration' }).locator('i');
        this.configurationButtonListedItem1 = page.getByRole('menuitem', { name: 'Email Configuration' });
        this.configurationButtonListedItem2 = page.getByRole('menuitem', { name: 'Email Subscriptions' });
        this.configurationButtonListedItem3 = page.getByRole('menuitem', { name: 'Localization' });
        this.configurationButtonListedItem4 = page.getByRole('menuitem', { name: 'Language Packages' });
        this.configurationButtonListedItem5 = page.getByRole('menuitem', { name: 'Modules' });
        this.configurationButtonListedItem6 = page.getByRole('menuitem', { name: 'Social Media Authentication' });
        this.configurationButtonListedItem7 = page.getByRole('menuitem', { name: 'Register OAuth Client' });
        this.configurationButtonListedItem8 = page.getByRole('menuitem', { name: 'LDAP Configuration' });
        this.containerLocator = '.orangehrm-container >> role=row';
        this.rowsArray = null;
        this.recordsFoundText = null;
    }
    async navigateToAdminPage(): Promise<void> {
        await this.adminButton.click();
        await this.page.waitForLoadState('networkidle');
    }
    async adminPageAddUser(): Promise<void> {
        const uniqueUsername = `user_${Date.now()}`;
        await this.addButton.click();
        await this.formI.click();
        await this.formIOption.click();
        await this.typeForHints.fill('Stoycho');
        await this.page.waitForTimeout(5000);
        await this.typeForHintsOption.click();
        await this.formIsecond.click();
        await this.formEnabled.click();
        await this.usernameBox.fill(uniqueUsername);
        await this.passwordBox.fill('Naislojnata_Parola13.');
        await this.passwordBoxRepat.fill('Naislojnata_Parola13.');
        await this.saveButton.click();
    }
    async searchForUserRole(): Promise<void> {
        await this.userRole.click();
        await this.userRoleAdmin.click();
        await this.searchButton.click();
    }
    async initializeLocators(): Promise<void> {
        await this.page.waitForSelector(this.containerLocator);
        this.rowsArray = await this.page.locator(this.containerLocator).allTextContents();
        this.recordsFoundText = await this.page.locator('xpath=//*[@class and contains(concat(" ", normalize-space(@class), " "), " oxd-text--span ") and (position() = 1)]').textContent();
    }
    async getRecordsAndCompareNumber(): Promise<void> {
        await this.navigateToAdminPage();
        await this.initializeLocators();
        console.log('Rows:', this.rowsArray);

        if (this.rowsArray && this.recordsFoundText) { // null check
            const itemCount = this.rowsArray.length - 1;
            console.log('Item Count:', itemCount);
            console.log('Records Found Text:', this.recordsFoundText);

            const match = this.recordsFoundText.match(/\d+/);
            const recordsFoundCount = match ? parseInt(match[0], 10) : 0;
            console.log('Records Found Count:', recordsFoundCount);

            if (itemCount === recordsFoundCount) {
                console.log('The counts match!');
            } else {
                console.log(`Mismatch: Found ${itemCount} items, but records indicate ${recordsFoundCount}`);
            }
        } else {
            console.log('Rows or Records Found Text is null.');
        }
    }
    async checkJobTitlesRecords(): Promise<boolean> {
        await this.navigateToAdminPage();
        await this.jobButton.click();
        await this.jobButtonListedItem1.click();
        await this.page.waitForSelector(this.containerLocator);
        const rowsArray = await this.page.locator(this.containerLocator).allTextContents();
        const recordsFoundText = await this.page.getByText('Records Found').textContent();
        const itemCount = rowsArray.length - 1;
        const match = recordsFoundText ? recordsFoundText.match(/\d+/) : null;
        const recordsFoundCount = match ? parseInt(match[0], 10) : 0;
        if (itemCount === recordsFoundCount) {
            console.log('Job titles are: ' + itemCount);
            console.log('Job Titles: The counts match!');
            return true;
        } else {
            console.log(`Job Titles: Mismatch - Found ${itemCount} items, but records indicate ${recordsFoundCount}`);
            return false;
        }
    }

    async checkPayGradesRecords(): Promise<boolean> {
        try {
            await this.navigateToAdminPage();
            await this.jobButton.click();
            await this.jobButtonListedItem2.click();
            await this.page.waitForSelector(this.containerLocator);
            const rowsArray = await this.page.locator(this.containerLocator).allTextContents();
            const recordsFoundText = await this.page.getByText('Records Found').textContent();
            const itemCount = rowsArray.length - 1;
            const match = recordsFoundText ? recordsFoundText.match(/\d+/) : null;
            const recordsFoundCount = match ? parseInt(match[0], 10) : 0;
            if (itemCount === recordsFoundCount) {
                console.log('Pay Grades: The counts match!');
                return true;
            } else {
                console.log(`Pay Grades: Mismatch - Found ${itemCount} items, but records indicate ${recordsFoundCount}`);
                return false;
            }
        } catch (error) {
            console.error('Error in checkPayGradesRecords:', error);
            return false;
        }
    }

    async checkEmploymentStatusRecords(): Promise<boolean> {
        try {
            await this.navigateToAdminPage();
            await this.jobButton.click();
            await this.jobButtonListedItem3.click();
            await this.page.waitForSelector(this.containerLocator);
            const rowsArray = await this.page.locator(this.containerLocator).allTextContents();
            const recordsFoundText = await this.page.getByText('Records Found').textContent();
            const itemCount = rowsArray.length - 1;
            const match = recordsFoundText ? recordsFoundText.match(/\d+/) : null;
            const recordsFoundCount = match ? parseInt(match[0], 10) : 0;
            if (itemCount === recordsFoundCount) {
                console.log('Employment Status: The counts match!');
                return true;
            } else {
                console.log(`Employment Status: Mismatch - Found ${itemCount} items, but records indicate ${recordsFoundCount}`);
                return false;
            }
        } catch (error) {
            console.error('Error in checkEmploymentStatusRecords:', error);
            return false;
        }
    }

    async checkJobCategoriesRecords(): Promise<boolean> {
        try {
            await this.navigateToAdminPage();
            await this.jobButton.click();
            await this.jobButtonListedItem4.click();
            await this.page.waitForSelector(this.containerLocator);
            const rowsArray = await this.page.locator(this.containerLocator).allTextContents();
            const recordsFoundText = await this.page.getByText('Records Found').textContent();
            const itemCount = rowsArray.length - 1;
            const match = recordsFoundText ? recordsFoundText.match(/\d+/) : null;
            const recordsFoundCount = match ? parseInt(match[0], 10) : 0;
            if (itemCount === recordsFoundCount) {
                console.log('Job Categories: The counts match!');
                return true;
            } else {
                console.log(`Job Categories: Mismatch - Found ${itemCount} items, but records indicate ${recordsFoundCount}`);
                return false;
            }
        } catch (error) {
            console.error('Error in checkJobCategoriesRecords:', error);
            return false;
        }
    }

    async checkWorkShiftsRecords(): Promise<boolean> {
        try {
            await this.navigateToAdminPage();
            await this.jobButton.click();
            await this.jobButtonListedItem5.click();
            await this.page.waitForSelector(this.containerLocator);
            const rowsArray = await this.page.locator(this.containerLocator).allTextContents();
            const recordsFoundText = await this.page.getByText('Records Found').textContent();
            const itemCount = rowsArray.length - 1;
            const match = recordsFoundText ? recordsFoundText.match(/\d+/) : null;
            const recordsFoundCount = match ? parseInt(match[0], 10) : 0;
            if (itemCount === recordsFoundCount) {
                console.log('Work Shifts: The counts match!');
                return true;
            } else {
                console.log(`Work Shifts: Mismatch - Found ${itemCount} items, but records indicate ${recordsFoundCount}`);
                return false;
            }
        } catch (error) {
            console.error('Error in checkWorkShiftsRecords:', error);
            return false;
        }
    }

    async checkSkillsRecords(): Promise<boolean> {
        try {
            await this.navigateToAdminPage();
            await this.qualificationsButton.click();
            await this.qualificationsButtonListedItem1.click();
            await this.page.waitForSelector(this.containerLocator);
            const rowsArray = await this.page.locator(this.containerLocator).allTextContents();
            const recordsFoundText = await this.page.getByText('Records Found').textContent();
            const itemCount = rowsArray.length - 1;
            const match = recordsFoundText ? recordsFoundText.match(/\d+/) : null;
            const recordsFoundCount = match ? parseInt(match[0], 10) : 0;
            if (itemCount === recordsFoundCount) {
                console.log('Skills: The counts match!');
                return true;
            } else {
                console.log(`Skills: Mismatch - Found ${itemCount} items, but records indicate ${recordsFoundCount}`);
                return false;
            }
        } catch (error) {
            console.error('Error in checkSkillsRecords:', error);
            return false;
        }
    }

    async checkEducationRecords(): Promise<boolean> {
        try {
            await this.navigateToAdminPage();
            await this.qualificationsButton.click();
            await this.qualificationsButtonListedItem2.click();
            await this.page.waitForSelector(this.containerLocator);
            const rowsArray = await this.page.locator(this.containerLocator).allTextContents();
            const recordsFoundText = await this.page.getByText('Records Found').textContent();
            const itemCount = rowsArray.length - 1;
            const match = recordsFoundText ? recordsFoundText.match(/\d+/) : null;
            const recordsFoundCount = match ? parseInt(match[0], 10) : 0;
            if (itemCount === recordsFoundCount) {
                console.log('Education: The counts match!');
                return true;
            } else {
                console.log(`Education: Mismatch - Found ${itemCount} items, but records indicate ${recordsFoundCount}`);
                return false;
            }
        } catch (error) {
            console.error('Error in checkEducationRecords:', error);
            return false;
        }
    }

    async checkLicensesRecords(): Promise<boolean> {
        try {
            await this.navigateToAdminPage();
            await this.qualificationsButton.click();
            await this.qualificationsButtonListedItem3.click();
            await this.page.waitForSelector(this.containerLocator);
            const rowsArray = await this.page.locator(this.containerLocator).allTextContents();
            const recordsFoundText = await this.page.getByText('Records Found').textContent();
            const itemCount = rowsArray.length - 1;
            const match = recordsFoundText ? recordsFoundText.match(/\d+/) : null;
            const recordsFoundCount = match ? parseInt(match[0], 10) : 0;
            if (itemCount === recordsFoundCount) {
                console.log('Licenses: The counts match!');
                return true;
            } else {
                console.log(`Licenses: Mismatch - Found ${itemCount} items, but records indicate ${recordsFoundCount}`);
                return false;
            }
        } catch (error) {
            console.error('Error in checkLicensesRecords:', error);
            return false;
        }
    }

    async checkLanguagesRecords(): Promise<boolean> {
        try {
            await this.navigateToAdminPage();
            await this.qualificationsButton.click();
            await this.qualificationsButtonListedItem4.click();
            await this.page.waitForSelector(this.containerLocator);
            const rowsArray = await this.page.locator(this.containerLocator).allTextContents();
            const recordsFoundText = await this.page.getByText('Records Found').textContent();
            const itemCount = rowsArray.length - 1;
            const match = recordsFoundText ? recordsFoundText.match(/\d+/) : null;
            const recordsFoundCount = match ? parseInt(match[0], 10) : 0;
            if (itemCount === recordsFoundCount) {
                console.log('Languages: The counts match!');
                return true;
            } else {
                console.log(`Languages: Mismatch - Found ${itemCount} items, but records indicate ${recordsFoundCount}`);
                return false;
            }
        } catch (error) {
            console.error('Error in checkLanguagesRecords:', error);
            return false;
        }
    }

    async checkMembershipsRecords(): Promise<boolean> {
        try {
            await this.navigateToAdminPage();
            await this.qualificationsButton.click();
            await this.qualificationsButtonListedItem5.click();
            await this.page.waitForSelector(this.containerLocator);
            const rowsArray = await this.page.locator(this.containerLocator).allTextContents();
            const recordsFoundText = await this.page.getByText('Records Found').textContent();
            const itemCount = rowsArray.length - 1;
            const match = recordsFoundText ? recordsFoundText.match(/\d+/) : null;
            const recordsFoundCount = match ? parseInt(match[0], 10) : 0;
            if (itemCount === recordsFoundCount) {
                console.log('Memberships: The counts match!');
                return true;
            } else {
                console.log(`Memberships: Mismatch - Found ${itemCount} items, but records indicate ${recordsFoundCount}`);
                return false;
            }
        } catch (error) {
            console.error('Error in checkMembershipsRecords:', error);
            return false;
        }
    }
}