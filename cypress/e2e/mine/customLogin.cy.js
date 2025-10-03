/// <reference types="cypress" />
describe('Custom command to login', () => {
    it('should use custom command', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.wait(5000);
        cy.login('Admin', 'admin123');
        cy.get('.oxd-text.oxd-text--p').should('exist', 'Time at Work');
    });
});