import { Locator, Page } from '@playwright/test';

export class CartProduct {
    private page: Page;
    private name: Locator;

    constructor(page: Page, index: number) {
        this.page = page;
        const item = this.page.locator('[data-test-id="cart-items-container"]');
        this.name = item.locator('[data-test-id^="cart-item-name-"]').nth(index);
    }

    get productName(): Locator {
        return this.name;
    }
}
