import { Locator, Page } from '@playwright/test';

export class LoginPage {
    private page: Page;
    private emailInput: Locator;
    private passwordInput: Locator;
    private submitButton: Locator;
    private loginContainer: Locator;
    private errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailInput = this.page.locator('[data-test-id="email-input"]');
        this.passwordInput = this.page.locator('[data-test-id="password-input"]');
        this.submitButton = this.page.locator('[data-test-id="login-button"]');
        this.loginContainer = this.page.locator('[data-test-id="login-container"]');
        this.errorMessage = this.page.locator('[data-test-id="login-error"]');
    }

    get loginForm(): Locator {
        return this.loginContainer;
    }

    get loginErrorMessage(): Locator {
        return this.errorMessage;
    }

    async goTo() {
        await this.page.goto('/');
    }

    async login(username: string, password: string) {
        await this.emailInput.isVisible();
        await this.emailInput.fill(username);
        await this.passwordInput.fill(password);
        await this.submitButton.click();
    }
}
