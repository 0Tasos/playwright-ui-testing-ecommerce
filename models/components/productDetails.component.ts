import { Locator, Page } from '@playwright/test';

export class ProductDetailsModal {
    private productModal: Locator;
    private image: Locator;
    private productName: Locator;
    private productDescription: Locator;
    private productPrice: Locator;
    private addToCartButton: Locator;

    constructor(page: Page) {
        this.productModal = page.locator('[data-test-id="product-modal"]');
        this.image = this.productModal.locator('[data-test-id="modal-product-image-container"]');
        this.productName = this.productModal.locator('[data-test-id="modal-product-name"]');
        this.productDescription = this.productModal.locator('[data-test-id="modal-product-description"]');
        this.productPrice = this.productModal.locator('[data-test-id="modal-product-price"]');
        this.addToCartButton = this.productModal.locator('[data-test-id="modal-add-to-cart-button"]');
    }

    get modalLocator(): Locator {
        return this.productModal;
    }

    get imageLocator(): Locator {
        return this.image;
    }

    get nameLocator(): Locator {
        return this.productName;
    }

    get descriptionLocator(): Locator {
        return this.productDescription;
    }

    get priceLocator(): Locator {
        return this.productPrice;
    }

    get addToCartButtonLocator(): Locator {
        return this.addToCartButton;
    }
}
