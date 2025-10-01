import type { Page, Locator } from '@playwright/test';

export class LoginPage  {

    page: Page;
    username_textbox: Locator;
    password_textbox: Locator;
    login_button: Locator;

    constructor(page: Page) {
        this.page = page
        this.username_textbox = page.locator('//input[@name="username"]');
        this.password_textbox = page.locator('//input[@name="password"]');
        this.login_button = page.getByRole('button', { name: 'Login' });
    }

    // async login(username: string = 'enchev', password: string = 'Stoicho_123456'): Promise<void> {
    //     await this.username_textbox.fill(username);
    //     await this.password_textbox.fill(password);
    //     await this.login_button.click();
    // }

    // async navigateToPage(): Promise<void>{
    //     await this.page.goto('http://localhost/orangehrm/orangehrm-5.7/web/index.php/auth/login');
    //     await this.page.waitForLoadState('load');
    // }\

    async login(username: string = 'Admin', password: string = 'admin123'): Promise<void> {
        await this.username_textbox.fill(username);
        await this.password_textbox.fill(password);
        await this.login_button.click();
    }
    
    async navigateToPage(): Promise<void>{
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await this.page.waitForLoadState('load');
    }
}