import { expect, test } from '../../config/fixture';

test.describe('Shopping Cart', () => {
    test('Add one product and verify that cart is updated and badge is displayed', async ({
        products,
        shoppingCart
    }) => {
        await test.step('Navigate to products page', async () => {
            await products.goTo();
        });

        let firstProduct: string | null;
        await test.step('Add one product to cart', async () => {
            firstProduct = await products.addProductToCart(0);
        });

        await test.step('Open shopping cart', async () => {
            await shoppingCart.clickShoppingCartButton();
        });

        await test.step('Verify products in cart', async () => {
            await expect(shoppingCart.productNameAt(0)).toHaveText(firstProduct!);
        });

        await test.step('Verify cart badge is updated', async () => {
            await expect(shoppingCart.badge).toBeVisible();
            await expect(shoppingCart.badge).toHaveText('1');
        });
    });
});
