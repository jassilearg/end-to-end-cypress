const fakerBR = require('faker-br');

Cypress.Commands.add('clicarCadastroFazerEntregas', () => {
    cy.deliver().click();
});

Cypress.Commands.add('inserirNome', () => {
    cy.nome().type(fakerBR.name.firstName());
});

Cypress.Commands.add('inserirCpf', () => {
    cy.cpf().type(fakerBR.br.cpf());
});

Cypress.Commands.add('inserirEmail', () => {
    cy.email().type(fakerBR.internet.email());
});

Cypress.Commands.add('inserirWhatsapp', () => {
    cy.whatsapp().type(fakerBR.phone.phoneNumber());
});

Cypress.Commands.add('inserirCodigoPostal', () => {
    cy.postalcode().type(fakerBR.address.zipCodeValid());
});

Cypress.Commands.add('clicarBuscarCepButton', () => {
    cy.buscarCepButton().click();
});

Cypress.Commands.add('inserirNumberAddress', () => {
    cy.numberAddress().type(fakerBR.random.number());
});

Cypress.Commands.add('inserirAddressDetails', () => {
    cy.addressDetails().type('Ap 102');
});

Cypress.Commands.add('selecionarDeliveryMethod', () => {
    cy.contains('.delivery-method li', 'Moto').click();
});

Cypress.Commands.add('inserirImageCnh', () => {
    cy.imageCnh().attachFile('/images/carteira-nacional-habilitacao.jpg', { force: true });
});

Cypress.Commands.add('clicarSuccessButton', () => {
    cy.successButton().click();
});

Cypress.Commands.add('clicarConfirmButton', () => {
    cy.confirmButton().click();
});