import {test as base} from '@playwright/test';
import LoginSection from '../pageobjects/commonSections/loginSection';

type commonFixtures = {
    loginSection: LoginSection;
}

export const test = base.extend<commonFixtures>({
    loginSection: async ({page}, use) => {
        const loginSection = new LoginSection(page);
        await use(loginSection);
    } 




});
