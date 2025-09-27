// reference types="cypress" />
describe('Dropdown', () => {
  beforeEach(() => {
    cy.visit('https://www.orangehrm.com/en/book-a-free-demo')
    cy.get('#Form_getForm_Country').contains('Country').click()
   // cy.get('.dropdown-menu').contains('Nigeria').click()
  });
});