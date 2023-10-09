const fakerBR = require('faker-br');

describe('Cadastro', () => {
    it('Deve permitir que o usuário cadastre-se como entregador', () => {
        cy.viewport(1440, 900);
        cy.visit('https://buger-eats.vercel.app/');

        cy.validarTelaHome();
        cy.clicarCadastroFazerEntregas();
        cy.validarTelaCadastro();
        cy.inserirNome();        
        cy.inserirCpf();
        cy.inserirEmail();
        cy.inserirWhatsapp();
        cy.inserirCodigoPostal();
        cy.clicarBuscarCepButton();
        cy.inserirNumberAddress();
        cy.inserirAddressDetails();
        //cy.contains(deliveryMethod, 'Moto').click();/////////////
        cy.selecionarDeliveryMethod();

        cy.inserirImageCnh();
        cy.clicarSuccessButton();
        cy.clicarConfirmButton();
        cy.validarTelaHome();
    })
})