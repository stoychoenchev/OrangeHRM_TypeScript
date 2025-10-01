import type { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage.js';
import { expect } from '@playwright/test';

export class MyInfoPage extends BasePage {
    nicknameField: Locator;
    smokerField: Locator;   
    militaryServiceField: Locator;
    constructor(page: Page) {
        super(page);
        this.nicknameField = page.locator('.oxd-input-group').filter({ hasText: 'Nickname' })
        .locator('input');
        this.smokerField = page.getByText('Yes');
        this.militaryServiceField = page.locator('.oxd-input-group').filter({ hasText: 'Military Service' })
            .locator('input');
    }

    async assertDeprecatedFieldsAreVisible() {
        await expect(this.nicknameField).toBeVisible();
        await expect(this.smokerField).toBeVisible();
        await expect(this.militaryServiceField).toBeVisible();
    }

    async assertDeprecatedFieldsAreNotVisible() {
        await expect(this.nicknameField).not.toBeVisible();
        await expect(this.smokerField).not.toBeVisible();
        await expect(this.militaryServiceField).not.toBeVisible();
    }
}