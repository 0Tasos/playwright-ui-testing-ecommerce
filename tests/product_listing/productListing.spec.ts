import { expect, test } from '../../config/fixture';

test.describe('Product Listing', () => {
    test('Verify six products are displayed on the product page', async ({ products }) => {
        await test.step('Navigate to products page', async () => {
            await products.goTo();
        });

        await test.step('Verify total number of products is 6', async () => {
            await expect(products.productName).toHaveCount(6);
        });
    });

    test('Verify all elements are displayed for first product', async ({ products }) => {
        await test.step('Navigate to products page', async () => {
            await products.goTo();
        });

        await test.step('Select first product', async () => {
            const firstProduct = await products.selectProduct(0);

            await test.step('Verify product elements', async () => {
                await expect(firstProduct.imageLocator).toBeVisible();
                await expect(firstProduct.nameLocator).toHaveText('Wireless Earbuds');
                await expect(firstProduct.viewDetailsButtonLocator).toBeVisible();
                await expect(firstProduct.priceLocator).toHaveText('€199.99');
                await expect(firstProduct.addToCartButtonLocator).toBeVisible();
            });
        });
    });
});
