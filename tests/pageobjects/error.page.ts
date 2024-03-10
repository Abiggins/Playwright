import { Page, Locator } from '@playwright/test';

export class ErrorPage {
    page: Page;
    errorHeader: Locator;
    errorText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.errorHeader = page.locator('css=h1.title');
        this.errorText = page.locator('css=p.error');
    }

}