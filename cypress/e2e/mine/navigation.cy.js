/// <reference types="cypress" />
describe('Navigate to specific page', () => {
    it('Navigate to Free Demo page', () => {
        cy.visit('https://www.demoblaze.com/');
        cy.wait(5000);
        cy.title().should('exist', 'STORE');

        cy.get(".hrefch[href='prod.html?idp_=1']").click();
        cy.get('.name').should('exist', 'Samsung galaxy s6');

        cy.go('back');
        cy.title().should('exist', 'STORE');

        cy.go('forward');
        cy.url().should('exist', 'Samsung galaxy s6');

        cy.reload();
    });
}); 