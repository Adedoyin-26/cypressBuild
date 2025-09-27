// reference types="cypress" />
describe('Dropdown', () => {
  beforeEach(() => {
    cy.visit('https://www.orangehrm.com/en/book-a-free-demo')
  });

  it('Select dropdown', () => {
    cy.get('#Form_getForm_Country').select('Brazil').should('have.value', 'Brazil');
    // cy.get('Form_getForm_NoOfEmployees').select('<10').should('have.value', '<10');
    // cy.get('#Form_getForm_Country').select('Australia').should('have.value', 'Australia');
  });
});