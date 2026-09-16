import { Locator, Page } from '@playwright/test';
import { CartProduct } from '../components/cartProduct.component';

export class ShoppingCartPage {
    private page: Page;
    private shoppingCartButton: Locator;
    private shoppingCartBadge: Locator;
    private shoppingCartItems: Locator;
    private checkoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.shoppingCartButton = this.page.locator('[data-test-id="cart-button"]');
        this.shoppingCartBadge = this.page.locator('[data-test-id="cart-count"]');
        this.shoppingCartItems = this.page.locator('[data-test-id^="cart-item-name-"]');
        this.checkoutButton = this.page.locator('[data-test-id="checkout-button"]');
    }

    get badge(): Locator {
        return this.shoppingCartBadge;
    }

    get cartItems(): Locator {
        return this.shoppingCartItems;
    }

    productNameAt(index: number): Locator {
        const cartProduct = new CartProduct(this.page, index);
        return cartProduct.productName;
    }

    async clickShoppingCartButton() {
        await this.shoppingCartButton.click();
    }

    async proceedToCheckout() {
        await this.checkoutButton.click();
    }
}
