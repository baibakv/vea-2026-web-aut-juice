import { BasePage } from "../pageObjects/basePage";

export class SavedAddressPage extends BasePage {
    static get addNewAddressButton() {
        return cy.get('[aria-label="Add a new address"]');
    }

  static get addressList() {
        return cy.get('mat-table');
    }
}