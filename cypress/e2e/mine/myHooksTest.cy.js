// /// <reference types="cypress" />

// describe('Product Store Automation', () => {
//   beforeEach(() => {
//     cy.visit('https://demoblaze.com/index.html') 
//   });

//   it('should display navigation bar links correctly', () => {
//     cy.get('nav').within(() => {
//       cy.contains('Home').should('be.visible');
//       cy.contains('Contact').should('be.visible');
//       cy.contains('About us').should('be.visible');
//       cy.contains('Cart').should('be.visible');
//       cy.contains('Log in').should('be.visible');
//       cy.contains('Sign up').should('be.visible');
//     });
//   });

//   it('should open login modal and perform login', () => {
//     cy.contains('Log in').click();

//     // Assert login modal is visible
//     cy.get('#logInModal').should('be.visible');

//     // Fill login form (replace with real selectors & credentials)
//     cy.get('#loginusername').type('Dolly52');
//     cy.get('#loginpassword').type('123456');
//     cy.get('button').contains('Log in').click();

//     // Assert successful login (this might change based on app behavior)
//     cy.contains('Welcome testuser').should('be.visible');
//   });

//   it('should assert categories exist', () => {
//     cy.contains('CATEGORIES').should('be.visible');
//     cy.contains('Phones').should('be.visible');
//     cy.contains('Laptops').should('be.visible');
//     cy.contains('Monitors').should('be.visible');
//   });

//   it('should display at least one product card with name and price', () => {
//     cy.get('.card').should('have.length.greaterThan', 0);

//     cy.get('.card').first().within(() => {
//       cy.get('.card-title').should('exist').and('not.be.empty');
//       cy.get('.card-price').should('exist').and('contain', '$');
//     });
//   });

//   it('should verify product details for Samsung Galaxy S6', () => {
//     cy.contains('Samsung galaxy s6').click();

//     cy.get('#productModal').should('be.visible');
//     cy.get('#productModal .modal-title').should('contain', 'Samsung galaxy s6');
//     cy.get('#productModal').should('contain', '$360');
//     cy.get('#productModal').should(
//       'contain',
//       'The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420 processor'
//     );

//     cy.get('#productModal .btn-close').click();
//   });

//   it('should open About Us page and assert content', () => {
//     cy.contains('About us').click();

//     cy.url().should('include', '/about');
//     cy.contains('We believe performance needs to be validated').should('be.visible');
//   });

//   it('should open Contact page and assert contact information', () => {
//     cy.contains('Contact').click();

//     cy.url().should('include', '/contact');
//     cy.contains('Get in Touch').should('be.visible');
//     cy.contains('2390 El Camino Real').should('be.visible');
//     cy.contains('+440 123456').should('be.visible');
//     cy.contains('demo@blazemeter.com').should('be.visible');
//   });

//   it('should add product to cart and assert cart page', () => {
//     cy.contains('Samsung galaxy s7').click();
//     cy.contains('Add to cart').click();

//     // Handle alert pop-up confirmation
//     cy.on('window:alert', (txt) => {
//       expect(txt).to.contains('Product added');
//     });

//     cy.contains('Cart').click();
//     cy.url().should('include', '/cart');
//     cy.contains('Samsung galaxy s7').should('be.visible');
//   });
// });
