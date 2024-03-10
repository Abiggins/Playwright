import { Page, Locator } from '@playwright/test';

export default class Nav {
    page: Page;
    footer: Footer;
    header: Header;

    constructor(page: Page) {
        this.page = page;
        this.footer = new Footer(page);
        this.header = new Header(page);
    }
}

export class Header {
    page: Page;
    aboutUsLink: Locator;
    servicesLink: Locator;
    homeButton: Locator;
    // products: Locator; leads out of scope
    // locations: Locator; leads out of scope
    // adminPage: Locator; leads out of scope
    aboutUsButton: Locator;
    contactUsButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.aboutUsLink = page.locator('text=About Us');
        this.servicesLink = page.locator('text=Services');
        // this.products = nav.locator('text=Products'); leads out of scope
        // this.locations = nav.locator('text=Locations'); leads out of scope
        // this.adminPage = nav.locator('text=Admin Page'); Leads out of scope
        this.homeButton = page.locator('text=Home');
        this.aboutUsButton = page.locator('text=About Us');
        this.contactUsButton = page.locator('text=Contact Us');
    }
}

export class Footer {
    aboutUs: Locator;
    services: Locator;
    products: Locator;
    locations: Locator;
    forum: Locator;
    siteMap: Locator;
    contactUs: Locator;

    constructor(page: Page) {
        this.aboutUs = page.locator('text=About Us');
        this.services = page.locator('text=Services');
        this.products = page.locator('text=Products');
        this.locations = page.locator('text=Locations');
        this.forum = page.locator('text=Forum');
        this.siteMap = page.locator('text=Site Map');
        this.contactUs = page.locator('text=Contact Us');
    }
}

