import { expect, test } from '../../config/fixture';

test.describe('User Authentication', () => {
    test.use({ storageState: undefined });

    test('Verify successful login with valid credentials', async ({ login, products }) => {
        await test.step('Verify user is on login page', async () => {
            await expect(login.loginForm).toBeVisible();
        });

        await test.step('Login with valid credentials', async () => {
            await login.login('test@test.com', 'test');
        });

        await test.step('Verify user is redirected to products page', async () => {
            await expect(products.productsGrid).toBeVisible();
        });
    });

    const invalidCredentials = [
        {
            email: 'test@test.com',
            password: 'invalid_password',
            error: 'Invalid credentials'
        },
        {
            email: 'invalid@email.com',
            password: 'test',
            error: 'Invalid credentials'
        }
    ];

    invalidCredentials.forEach(({ email, password, error }) => {
        test(`Verify error message with invalid credentials: ${email} = ${password}`, async ({ login }) => {
            await expect(login.loginForm).toBeVisible();

            await login.login(email, password);
            await expect(login.loginErrorMessage).toHaveText(error);
        });
    });
});
