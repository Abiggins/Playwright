import { Page, Locator } from "@playwright/test";

export default class RegisterPage {
    page: Page;
    firstNameField: Locator;
    lastNameField: Locator;
    addressField: Locator;
    cityField: Locator;
    stateField: Locator;
    zipField: Locator;
    phoneField: Locator;
    SSNField: Locator;
    usernameField: Locator;
    passwordField: Locator;
    confirmPasswordField: Locator;
    registerButton: Locator;
    registeredTitle: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstNameField = page.locator('id=customer.firstName');
        this.lastNameField = page.locator('id=customer.lastName');
        this.addressField = page.locator('id=customer.address.street');
        this.cityField = page.locator('id=customer.address.city');
        this.stateField = page.locator('id=customer.address.state');
        this.zipField = page.locator('id=customer.address.zipCode');
        this.phoneField = page.locator('id=customer.phoneNumber');
        this.SSNField = page.locator('id=customer.ssn');
        this.usernameField = page.locator('id=customer.username');
        this.passwordField = page.locator('id=customer.password');
        this.confirmPasswordField = page.locator('id=repeatedPassword');
        this.registerButton = page.getByRole('button', { name: 'Register' });
    }

    async goto() {
        await this.page.goto('/parabank/register.htm');
    }

    async register(firstName?: string, lastName?: string, password?: string, username?: string) {

        const credentials = {
            firstName: firstName ? firstName : 'john',
            lastName: lastName ? lastName : 'travers',
            address: '1234 Elm St',
            city: 'Anytown',
            state: 'NY',
            zipCode: '12345',
            phoneNumber: '123-456-7890',
            ssn: '123-45-6789',
            password: password ? password : 'password'
        }
        const generatedUserName = username ? username : credentials.firstName + credentials.lastName + Math.floor(Math.random() * 10000);
        await this.firstNameField.fill(credentials.firstName);
        await this.lastNameField.fill(credentials.lastName);
        await this.addressField.fill(credentials.address);
        await this.cityField.fill(credentials.city);
        await this.stateField.fill(credentials.state);
        await this.zipField.fill(credentials.zipCode);
        await this.phoneField.fill(credentials.phoneNumber);
        await this.SSNField.fill(credentials.ssn);
        await this.usernameField.fill(generatedUserName);
        await this.passwordField.fill(credentials.password);
        await this.confirmPasswordField.fill(credentials.password);
        await this.registerButton.click();

        return generatedUserName;

    }

}
