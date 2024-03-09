import { Page , Locator } from "@playwright/test";

export default class LoginSection {
    page: Page;
    usernameField: Locator;
    passwordField: Locator;
    loginButton: Locator;
    forgotLoginInfo: Locator;
    registerButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameField = page.locator('input[name="username"]');
        this.passwordField = page.locator('input[name="password"]');
        this.loginButton = page.getByRole('button', { name: 'Log In' });
        this.forgotLoginInfo = page.locator('text=Forgot login info?');
        this.registerButton = page.locator('text=Register');
    }

    async login(username: string, password: string) {
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();

    }

}
