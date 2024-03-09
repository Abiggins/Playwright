import { Page, Locator } from '@playwright/test';

export class Nav {
    nav: Page;
    solutions: Locator;
    aboutUs: Locator;
    services: Locator;
    // products: Locator; leads out of scope
   // locations: Locator; leads out of scope
   // adminPage: Locator; leads out of scope

    constructor(nav: Page) {
        this.solutions = nav.locator('text=Solutions');
     //  this.aboutUs = nav.getByRole('id=About Us');
        this.services = nav.locator('text=Services');
        // this.products = nav.locator('text=Products'); leads out of scope
        // this.locations = nav.locator('text=Locations'); leads out of scope
        // this.adminPage = nav.locator('text=Admin Page');
    }
}