import { Locator, Page } from '@playwright/test';

export class Product {
    private page: Page;
    private image: Locator;
    private productName: Locator;
    private viewDetailsButton: Locator;
    private productPrice: Locator;
    private addToCartButton: Locator;

    constructor(page: Page, index: number) {
        this.page = page;
        const item = this.page.locator('[data-test-id^="product-card-"]').nth(index);
        this.image = item.locator('[data-test-id="product-image"]');
        this.productName = item.locator('[data-test-id="product-name"]');
        this.viewDetailsButton = item.locator('[data-test-id="view-details-button"]');
        this.productPrice = item.locator('[data-test-id="product-price"]');
        this.addToCartButton = item.locator('[data-test-id="add-to-cart-button"]');
    }

    get imageLocator(): Locator {
        return this.image;
    }

    get nameLocator(): Locator {
        return this.productName;
    }

    get viewDetailsButtonLocator(): Locator {
        return this.viewDetailsButton;
    }

    get priceLocator(): Locator {
        return this.productPrice;
    }

    get addToCartButtonLocator(): Locator {
        return this.addToCartButton;
    }

    async name() {
        return await this.productName.textContent();
    }

    async viewDetails() {
        return await this.viewDetailsButton.click();
    }

    async addToCart() {
        return await this.addToCartButton.click();
    }
}
