import type { Page, Locator } from '@playwright/test';

export class BasePage {
    page: Page;
    adminButton: Locator;
    pimButton: Locator;
    leaveButton: Locator;
    timeButton: Locator;
    recruitmentButton: Locator;
    myInfoButton: Locator;
    performanceButton: Locator;
    dashboardButton: Locator;
    directoryButton: Locator;
    maintenanceButton: Locator;
    claimButton: Locator;
    buzzButton: Locator;
    hideNavigationButton: Locator;
    upgradeButton: Locator;
    profilePicture: Locator;
    bookButton: Locator;
    logOutButton: Locator;
    supportButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.adminButton = page.getByRole('link', { name: 'Admin' });
        this.pimButton = page.getByRole('link', { name: 'PIM' });
        this.leaveButton = page.getByRole('link', { name: 'Leave' });
        this.timeButton = page.getByRole('link', { name: 'Time' });
        this.recruitmentButton = page.getByRole('link', { name: 'Recruitment' });
        this.myInfoButton = page.getByRole('link', { name: 'My Info' });
        this.performanceButton = page.getByRole('link', { name: 'Performance' });
        this.dashboardButton = page.getByRole('link', { name: 'Dashboard' });
        this.directoryButton = page.getByRole('link', { name: 'Directory' });
        this.maintenanceButton = page.getByRole('link', { name: 'Maintenance' });
        this.claimButton = page.getByRole('link', { name: 'Claim' });
        this.buzzButton = page.getByRole('link', { name: 'Buzz' });
        this.hideNavigationButton = page.locator('xpath=//button[contains(@class, "oxd-main-menu-button")]');
        this.upgradeButton = page.getByRole('button', { name: 'Upgrade' });
        this.profilePicture = page.getByRole('banner').getByRole('img', { name: 'profile picture' });
        this.bookButton = page.locator("//a[@href='/open-source/upgrade-to-advanced#demo-submit']");
        this.logOutButton = page.getByRole('menuitem', { name: 'Logout' });
        this.supportButton = page.getByRole('menuitem', { name: 'Support' });
    }
    async clickAndVerifyThatWeAreNavigatedToTheUpgradePage(): Promise<void> {  
        await this.upgradeButton.click({ force: true });
    }
    async logout(): Promise<void> {
        await this.profilePicture.click();
        await this.logOutButton.click(); 
    }
    async clickSupportItem(): Promise<void> {
        await this.profilePicture.click();
        await this.supportButton.click();
    }
}

