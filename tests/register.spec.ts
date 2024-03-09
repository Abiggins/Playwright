import { test } from './fixtures/base'
import Register from './pageobjects/Register';
import LoginSection from './pageobjects/commonSections/loginSection';

test.describe('Register Functionality', () => {
    test('as a user, I can register with valid credentials', async ({page}) => {
        const loginSection = new LoginSection(page);
        await page.goto('');
        await loginSection.login('john', 'demo');
    });

    test('as a user, I cannot register with invalid credentials', async ({page }) => {

    });
    
    test('as a already registered user, I cannot reregister', async ({page }) => {

    });
});