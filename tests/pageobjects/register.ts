import { Page , Locator } from "@playwright/test";
import Common from "./commonSections/loginSection.ts";

export default class Register {
    page: Page;
    common: Common;
    firstNameField: Locator;
    lastNameField: Locator;

    constructor(page: Page) {
        this.page = page;
        this.common = new Common(page);

    }

    async register(username: string, password: string) {


    }

}
