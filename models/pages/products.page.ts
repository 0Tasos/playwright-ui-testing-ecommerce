import { Locator, Page } from '@playwright/test';
import { Product } from '../components/product.component';
import { ProductDetailsModal } from '../components/productDetails.component';

export class ProductsPage {
    private page: Page;
    private dashboard: Locator;
    private dashboardItemName: Locator;
    private dashboardItemPrice: Locator;

    constructor(page: Page) {
        this.page = page;
        this.dashboard = this.page.locator('[data-test-id="products-grid"]');
        this.dashboardItemName = this.page.locator('[data-test-id="product-name"]');
        this.dashboardItemPrice = this.page.locator('[data-test-id="product-price"]');
    }

    get productsGrid(): Locator {
        return this.dashboard;
    }

    get productName(): Locator {
        return this.dashboardItemName;
    }

    productNameAt(index: number): Locator {
        return this.dashboardItemName.nth(index);
    }

    productPriceAt(index: number): Locator {
        return this.dashboardItemPrice.nth(index);
    }

    async goTo() {
        await this.page.goto('/dashboard');
    }

    async selectProduct(index: number) {
        return new Product(this.page, index);
    }

    async addProductToCart(index: number) {
        const product = new Product(this.page, index);
        const productName = await product.name();
        await product.addToCart();
        return productName;
    }

    async selectViewDetailsFor(index: number) {
        const product = new Product(this.page, index);
        await product.viewDetails();
        const modal = new ProductDetailsModal(this.page);
        await modal.modalLocator.waitFor({ state: 'visible' });
        return modal;
    }
}
