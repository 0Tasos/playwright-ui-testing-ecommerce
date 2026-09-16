import { test as base } from '@playwright/test';
import { LoginPage } from '../models/pages/login.page';
import { ProductsPage } from '../models/pages/products.page';
import { ShoppingCartPage } from '../models/pages/shoppingCart.page';
import { CheckoutPage } from '../models/pages/checkout.page';

export const test = base.extend<{
    login: LoginPage;
    products: ProductsPage;
    shoppingCart: ShoppingCartPage;
    checkout: CheckoutPage;
}>({
    login: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.goTo();
        await use(loginPage);
    },
    products: async ({ page }, use) => {
        const productsPage = new ProductsPage(page);
        await use(productsPage);
    },
    shoppingCart: async ({ page }, use) => {
        const shoppingCartPage = new ShoppingCartPage(page);
        await use(shoppingCartPage);
    },
    checkout: async ({ page }, use) => {
        const checkoutPage = new CheckoutPage(page);
        await use(checkoutPage);
    }
});

export { expect } from '@playwright/test';
