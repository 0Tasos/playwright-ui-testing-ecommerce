import { expect, test } from '../../config/fixture';

test.describe('Checkout Process', () => {
    test('Add product to cart and complete transaction', async ({ products, shoppingCart, checkout }) => {
        let product: string | null;

        await test.step('Navigate to products page and add item to cart', async () => {
            await products.goTo();
            product = await products.addProductToCart(0);
        });

        await test.step('Navigate to checkout', async () => {
            await shoppingCart.clickShoppingCartButton();
            await shoppingCart.proceedToCheckout();
        });

        await test.step('Fill checkout information', async () => {
            await checkout.fillCheckoutForm('John', 'street', '12345', 'city', '+30 123456789');
        });

        await test.step('Verify checkout overview details', async () => {
            const checkoutConfirmOrder = await checkout.getConfirmOrderPage();
            await expect.soft(checkoutConfirmOrder.productNameLocatorAt(0)).toContainText(product!);
            await expect.soft(checkoutConfirmOrder.confirmationOrder).toHaveText('Confirm Your Order');
            await expect.soft(checkoutConfirmOrder.details).toHaveText('Shipping Details');
            await expect.soft(checkoutConfirmOrder.name).toHaveText('John');
            await expect.soft(checkoutConfirmOrder.phone).toHaveText('+30 123456789');
            await expect.soft(checkoutConfirmOrder.address).toHaveText('street');
            await expect.soft(checkoutConfirmOrder.cityState).toHaveText('city 12345');
            await expect.soft(checkoutConfirmOrder.summaryTitle).toHaveText('Order Summary');
            await expect.soft(checkoutConfirmOrder.total).toHaveText('Total:€199.99');
        });

        await test.step('Complete checkout and verify confirmation', async () => {
            const confirmOrder = await checkout.getConfirmOrderPage();
            await confirmOrder.confirmCheckout();
            const checkoutFinish = await confirmOrder.getSuccessPage();
            await expect(checkoutFinish.successMessage).toHaveText('Thank You For Your Order!');
        });
    });
});
