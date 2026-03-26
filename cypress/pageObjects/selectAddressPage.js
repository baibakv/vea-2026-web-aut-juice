import { BasePage } from "../pageObjects/basePage";

export class SelectAddressPage extends BasePage {
    static selectAddress(address) {
        cy.contains('mat-row', address).find('mat-radio-button').click();
    }

    static get continueButton() {
        return cy.get('[aria-label="Proceed to payment selection"]');
    }
}