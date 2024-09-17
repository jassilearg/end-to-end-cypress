Cypress.Commands.add('titleHome', ()=> {
    cy.get('#page-home main h1');
});

Cypress.Commands.add('deliver', () => {
   cy.get('a[href="/deliver"]'); 
});

Cypress.Commands.add('titleFormCadastro', () => {
    cy.get('#page-deliver form h1');
});

Cypress.Commands.add('nome', () => {
    cy.get('input[name="name"]');
});

Cypress.Commands.add('cpf', () => {
    cy.get('input[name="cpf"]');
});

Cypress.Commands.add('email', () => {
    cy.get('input[name="email"]');
});

Cypress.Commands.add('whatsapp', () => {
    cy.get('input[name="whatsapp"]');
});

Cypress.Commands.add('postalcode', () => {
    cy.get('input[name="postalcode"]');
});

Cypress.Commands.add('buscarCepButton', () => {
    cy.get('input[type=button][value="Buscar CEP"]');
});

Cypress.Commands.add('numberAddress', () => {
    cy.get('input[name="address-number"]');
});

Cypress.Commands.add('addressDetails', () => {
    cy.get('input[name="address-details"]');
});

Cypress.Commands.add('imageCnh', () => {
    cy.get('input[accept^="image"]');
});

Cypress.Commands.add('successButton', () => {
    cy.get('.button-success');
});

Cypress.Commands.add('confirmButton', () => {
    cy.get('.swal2-actions button[style="display: inline-block;"]');
});

Cypress.Commands.add('erroCampoVazio', () => {
    cy.get('.alert-error');
});