/// <reference types="cypress" />
import 'cypress-file-upload';

describe('File upload demo', () => {
    before(() => {
        cy.visit('https://the-internet.herokuapp.com/upload');
    });

    it('Upload file', () => {
        const fileName = 'psfos.pdf';
        cy.get('#file-upload').attachFile(fileName);
        cy.get('#file-submit').click();
        cy.wait(5000);
        cy.get('h3').should('exist', 'File Uploaded!');
        cy.get('#uploaded-files').should('contain.text', fileName);
    });
});