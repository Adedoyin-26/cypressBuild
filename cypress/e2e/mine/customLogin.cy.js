/// <reference types="cypress" />
import Login from "../../pageObjects/Login";

describe('Custom command to login', () => {
    it('should use custom command', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.wait(5000);
        cy.fixture('Orangehrm').then((data) => {
        cy.login(data.username, data.password);
        cy.get('.oxd-text.oxd-text--p').should('exist', 'Time at Work');
    });
});
    it('Login test', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        
        cy.wait(5000);

        const lgn = new Login();
        
        cy.fixture('Orangehrm').then((data) => {
            lgn.enterUsername(data.username);
            lgn.enterPassword(data.password);
            lgn.clickLogin();
            lgn.verifyLogin(data.expectedTitle);
    });
    });

});