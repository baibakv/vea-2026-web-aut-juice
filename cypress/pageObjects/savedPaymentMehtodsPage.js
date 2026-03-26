import { BasePage } from "../pageObjects/basePage";

export class SavedPaymentMethodsPage extends BasePage {
    static get addNewCardButton() {
        return cy.contains('mat-panel-title', 'Add new card');
    }

    static get nameField() {
        return cy.get('mat-expansion-panel input').eq(0);
    }

    static get cardNumberField() {
        return cy.get('mat-expansion-panel input').eq(1);    }

    static get expiryMonth() {
        return cy.get('mat-expansion-panel select').eq(0);
    }

    static get expiryYear() {
        return cy.get('mat-expansion-panel select').eq(1);
    }

    static get submitButton() {
        return cy.get('#submitButton');
    } 

    static get cardList() {
        return cy.get('mat-table');
    }
}