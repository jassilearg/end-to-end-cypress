Cypress.Commands.add('validarTelaHome', () => {
    cy.titleHome().should('contain', 'Seja um parceiro entregador pela Buger Eats');
});

Cypress.Commands.add('validarTelaCadastro', () => {
    cy.titleFormCadastro('contain', 'Cadastre-se para  fazer entregas');
});