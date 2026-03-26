import { BasePage } from "../pageObjects/basePage";

export class OrderCompletionPage extends BasePage {
    static get confirmationMessage() {
        return cy.get('mat-card h1');
    }
}