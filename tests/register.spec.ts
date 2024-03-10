import { test } from './pageobjects/fixtures/base.ts'
import RegisterPage from './pageobjects/register.page.ts';
import { expect } from '@playwright/test';

let registerPage

test.beforeEach(async ({ page }) => {
    registerPage = new RegisterPage(page);
    await page.goto('/');

});

test.describe('Register Functionality', () => {

    test('as a user, I can navigate to the registration page', async ({ loginSection, page }) => {
        await loginSection.registerButton.click();
        // verify the registration page is displayed
        await expect(page).toHaveTitle(/Register/);
    });

    test('as a user, I can register with valid credentials', async ({ page }) => {
        // create page objects
        // navigate to the registration page
        await registerPage.goto();
        // enter valid registration credential
        const registeredUser = await registerPage.register();
        await expect(page.getByText(`Welcome ${registeredUser}`)).toBeVisible();
        await expect(page).toHaveTitle(/Customer Created/);
    });

    test('as a user, I cannot register with invalid credentials', async ({ nav, page }) => {
        // create page objects
        const registerPage = new RegisterPage(page);
        // navigate to the registration page
        await registerPage.goto();
        // enter invalid registration credential
        await registerPage.registerButton.click();
        // assertions
        await expect(page.getByText('First Name is required')).toBeVisible();
        await expect(page.getByText('Last Name is required')).toBeVisible();
        await expect(page.getByText('Address is required')).toBeVisible();
    });

    test('as a already registered user, I cannot reregister', async ({ page }) => {
        // create page objects
        const registerPage = new RegisterPage(page);
        // navigate to the registration page
        await registerPage.goto();
        // enter valid registration credential
        await registerPage.register('', '', '', 'johndoe');
        // verify the error message is displayed
        await expect(page.getByText('This username already exists.')).toBeVisible();
    });
});