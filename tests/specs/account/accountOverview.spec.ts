import { test } from "../../pageobjects/fixtures/base";
import LoginSection from "../../pageobjects/fixtures/commonSections/loginSection";


test.beforeEach(async ({ page }) => {    
    // create page objects
    const loginSection = new LoginSection(page);
    // navigate to the home page
    await page.goto('/');
    await loginSection.login('johndoe', 'password');
});

test.describe('Account overview Functionality', () => {
    test('as a user, I can navigate to the account overview page', async ({ page }) => {
        // assertions
        
    });

});