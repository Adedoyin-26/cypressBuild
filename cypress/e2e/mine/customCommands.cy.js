/// <reference types="cypress" />
describe('Custom Commands demo', () => {
    it('should use custom command', () => {
        cy.visit('https://www.demoblaze.com/');
        cy.wait(5000);
        cy.clickLink('Samsung galaxy s6');
        cy.get('.name').should('have.text', 'Samsung galaxy s6');
    });
});