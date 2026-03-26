import { BasePage } from "../pageObjects/basePage";

export class PaymentOptionsPage extends BasePage {
    static selectCard(lastFourDigits) {
        cy.contains('mat-row', lastFourDigits).find('mat-radio-button').click();
    }

    static get continueButton() {
        return cy.get('[aria-label="Proceed to review"]');
    }
}