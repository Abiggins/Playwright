import { test as base } from '@playwright/test';
import LoginSection from './commonSections/loginSection';
import Nav from './commonSections/navSection';

type commonFixtures = {
    loginSection: LoginSection;
    nav: Nav;
}

export const test = base.extend<commonFixtures>({
    loginSection: async ({ page }, use) => {
        const loginSection = new LoginSection(page);
        await use(loginSection);
    },

    nav: async ({ page }, use) => {
        const nav = new Nav(page);
        await use(nav);
    }


});
