import { Locator, Page } from '@playwright/test';
import { ConfirmOrderPage } from './confirmOrder.page';

export class CheckoutPage {
    private page: Page;
    private nameInput: Locator;
    private addressInput: Locator;
    private zipCodeInput: Locator;
    private cityInput: Locator;
    private phoneInput: Locator;
    private placeOrderButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.nameInput = this.page.locator('[data-test-id="name-input"]');
        this.addressInput = this.page.locator('[data-test-id="address-input"]');
        this.zipCodeInput = this.page.locator('[data-test-id="zip-input"]');
        this.cityInput = this.page.locator('[data-test-id="city-input"]');
        this.phoneInput = this.page.locator('[data-test-id="phone-input"]');
        this.placeOrderButton = this.page.locator('[data-test-id="place-order-button"]');
    }

    async fillCheckoutForm(name: string, address: string, zipCode: string, city: string, phone: string) {
        await this.nameInput.waitFor();
        await this.nameInput.fill(name);
        await this.addressInput.fill(address);
        await this.zipCodeInput.fill(zipCode);
        await this.cityInput.fill(city);
        await this.phoneInput.fill(phone);
        await this.placeOrderButton.click();
    }

    async getConfirmOrderPage() {
        return new ConfirmOrderPage(this.page);
    }
}
