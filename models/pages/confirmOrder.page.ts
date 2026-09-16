import { Locator, Page } from '@playwright/test';
import { CheckoutFinishPage } from './checkoutFinish.page';

export class ConfirmOrderPage {
    private readonly page: Page;
    private confirmOrderTitle: Locator;
    private shippingDetails: Locator;
    private shippingName: Locator;
    private shippingPhone: Locator;
    private shippingAddress: Locator;
    private shippingCityState: Locator;
    private confirmationItem: Locator;
    private orderSummaryTitle: Locator;
    private confirmationTotal: Locator;
    private confirmButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.confirmOrderTitle = this.page.locator('[data-test-id="confirmation-title"]');
        this.shippingDetails = this.page.locator('[data-test-id="shipping-details-title"]');
        this.shippingName = this.page.locator('[data-test-id="shipping-name"]');
        this.shippingPhone = this.page.locator('[data-test-id="shipping-phone"]');
        this.shippingAddress = this.page.locator('[data-test-id="shipping-address"]');
        this.shippingCityState = this.page.locator('[data-test-id="shipping-city-state"]');
        this.confirmationItem = this.page.locator('[data-test-id^="confirmation-item-"]');
        this.orderSummaryTitle = this.page
            .locator('[data-test-id="order-confirmation-content"]')
            .locator('[data-test-id="order-summary-title"]');
        this.confirmationTotal = this.page.locator('[data-test-id="confirmation-total"]');
        this.confirmButton = this.page.locator('[data-test-id="modal-confirm-button"]');
    }

    get confirmationOrder(): Locator {
        return this.confirmOrderTitle;
    }

    get details(): Locator {
        return this.shippingDetails;
    }

    get name(): Locator {
        return this.shippingName;
    }

    get phone(): Locator {
        return this.shippingPhone;
    }

    get address(): Locator {
        return this.shippingAddress;
    }

    get cityState(): Locator {
        return this.shippingCityState;
    }

    get item(): Locator {
        return this.confirmationItem;
    }

    get summaryTitle(): Locator {
        return this.orderSummaryTitle;
    }

    get total(): Locator {
        return this.confirmationTotal;
    }

    productNameLocatorAt(index: number): Locator {
        const item = this.page.locator('[data-test-id^="confirmation-item-"]').nth(index);
        return item.locator('span').first();
    }

    async confirmCheckout() {
        await this.confirmButton.click();
    }

    async getSuccessPage() {
        return new CheckoutFinishPage(this.page);
    }
}
