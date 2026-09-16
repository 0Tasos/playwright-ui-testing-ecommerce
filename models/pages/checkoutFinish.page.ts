import { Locator, Page } from '@playwright/test';

export class CheckoutFinishPage {
    private page: Page;
    private successHeader: Locator;

    constructor(page: Page) {
        this.page = page;
        this.successHeader = this.page.locator('[data-test-id="success-title"]');
    }

    get successMessage(): Locator {
        return this.successHeader;
    }
}
