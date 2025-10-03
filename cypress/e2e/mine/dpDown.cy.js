/// <reference types="cypress" />
describe('Handle DropDown demo', () => { 
    it ('Select from DropDown', () => {
        cy.visit('https://www.zoho.com/commerce/free-demo.html');
        cy.wait(5000);
        cy.get('.cwf-change-country').click();
        cy.get('#zcf_address_country_1').select('Nigeria').should('have.value', 'Nigeria');
        cy.get('#zcf_address_country_1').select('United States').should('have.value', 'United States');
        cy.get('#zcf_address_country_1').select('China').should('exist', 'China');
    })
})