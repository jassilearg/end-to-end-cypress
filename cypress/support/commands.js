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

Cypress.Commands.add('validarMensagemErroNome', () => {
    cy.erroCampoVazio().should('be.visible').and('have.text', 'É necessário informar o nomeÉ necessário informar o CPFÉ necessário informar o emailÉ necessário informar o CEPÉ necessário informar o número do endereçoSelecione o método de entregaAdicione uma foto da sua CNH');
});

Cypress.Commands.add('validarMensagemErroCpf', () => {
    cy.erroCampoVazio().should('be.visible').and('have.text', 'É necessário informar o CPF');
});

Cypress.Commands.add('validarMensagemErroEmail', () => {
    cy.erroCampoVazio().should('be.visible').and('have.text', 'É necessário informar o email');
});

Cypress.Commands.add('validarMensagemErroCep', () => {
    cy.erroCampoVazio().should('be.visible').and('have.text', 'É necessário informar o CEP');
});

Cypress.Commands.add('validarMensagemErroNumeroEndereco', () => {
    cy.erroCampoVazio().should('be.visible').and('have.text', 'É necessário informar o número do endereço');
});

Cypress.Commands.add('validarMensagemMetodoEntrega', () => {
    cy.erroCampoVazio().should('be.visible').and('have.text', 'Selecione o método de entrega');
});

Cypress.Commands.add('validarMensagemErroFotoCnh', () => {
    cy.erroCampoVazio().should('be.visible').and('have.text', 'Adicione uma foto da sua CNH');
});