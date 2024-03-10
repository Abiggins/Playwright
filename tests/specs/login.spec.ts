import { test } from '../pageobjects/fixtures/base.ts'
import { ErrorPage } from '../pageobjects/error.page.ts';
import { expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    // navigate to the home page
    await page.goto('/');
});

test.describe('Login Functionality', () => {
    test('as a valid user i want to be able to login', async ({ loginSection, page }) => {
        //login
        await loginSection.login('johndoe', 'password');
        //assertions
        await expect(page).toHaveTitle(/Accounts Overview/);
    });

//    test('as a invalid user, i shouldnt be able to login', async ({ loginSection, page }) => {
//        await loginSection.login('notusername1441', 'notpassword');
//        await expect(page).toHaveTitle(/Login/);
//   }); This test does not work as parabank is designed to always return a successful login regardless of the credentials

    test('as a unregisted user, i shouldnt be able to login', async ({loginSection,page }) => {
        // create page objects
        const errorPage = new ErrorPage(page);
        // attempt to login with no credentials
        await loginSection.loginButton.click();

        // assertions
        await expect(page).toHaveTitle(/Error/);
        await expect(errorPage.errorHeader).toHaveText('Error!');
        await expect(errorPage.errorText).toHaveText('Please enter a username and password.');
    });

    test('as a logged in user, i should be able to logout', async ({  loginSection,  page }) => {
        //login
        await loginSection.login('johndoe', 'password');
        //logout
        await page.locator('text=Log Out').click();
        //assertions
        await expect(page).toHaveTitle(/Welcome/);
        await expect(loginSection.loginButton).toBeVisible();
    });
});