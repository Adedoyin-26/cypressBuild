/// reference: https://docs.cypress.io/guides/references/best-practices#Hooks
/// <reference types="cypress" />

describe('Hooks in Cypress', () => {

    before(() => {
        // runs once before all tests in the block
        cy.log('This is the before hook');
    });

    after(() => {
        // runs once after all tests in the block
        cy.log('This is the after hook');
    });

    beforeEach(() => {
        // runs before each test in the block
        cy.log('This is the beforeEach hook');
    });

    afterEach(() => {
        // runs after each test in the block
        cy.log('This is the afterEach hook');
    });
    
    it('Test Case 1', () => {
        cy.log('Executing Test Case 1');
        expect(true).to.equal(true);
    });

});
