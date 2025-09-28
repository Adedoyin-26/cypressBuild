/// <reference types="cypress" />
describe('DropDown demo', () => {
    it('Select from DropDown', () => {
        cy.visit('https://www.orangehrm.com/en/book-a-free-demo');
        cy.wait(5000);
        cy.get('#Form_getForm_Country').select('China').should('have.value', 'China');
    })
})