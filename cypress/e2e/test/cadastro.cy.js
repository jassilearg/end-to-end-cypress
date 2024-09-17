describe('Cadastro', () => {
    beforeEach(() => {
        cy.visit('https://buger-eats.vercel.app/');
        cy.validarTelaHome();
        cy.clicarCadastroFazerEntregas();
        cy.validarTelaCadastro();

    });
    context('Cadastro completo', () => {
        it('Deve permitir que o usuário cadastre-se como entregador', () => {
            cy.inserirNome();
            cy.inserirCpf();
            cy.inserirEmail();
            cy.inserirWhatsapp();
            cy.inserirCodigoPostal();
            cy.clicarBuscarCepButton();
            cy.inserirNumberAddress();
            cy.inserirAddressDetails();
            cy.selecionarDeliveryMethod();
            cy.inserirImageCnh();
            cy.clicarSuccessButton();
            cy.clicarConfirmButton();
            cy.validarTelaHome();
        });
    });
    context('Cadastro - Campos Obrigatórios', () => {
        it('Deve exibir mensagem de erro ao deixar campos obrigatórios em branco', () => {

            cy.clicarSuccessButton();

            // Verifique se as mensagens de erro aparecem
            cy.validarMensagemErroNome();
        });
    });
    context('Cadastro - Dados Inválidos', () => {
        it('Deve exibir mensagem de erro ao inserir dados inválidos', () => {


            // Inserir dados inválidos
            cy.inserirNome('John Doe'); // Nome está ok, mas outros campos estão incorretos
            cy.inserirCpf('12345678900'); // CPF inválido
            cy.inserirEmail('invalid-email'); // E-mail inválido
            cy.inserirWhatsapp('123'); // Número de WhatsApp inválido
            cy.inserirCodigoPostal('00000-000'); // Código postal inválido
            cy.clicarBuscarCepButton();
            cy.inserirNumberAddress(''); // Número do endereço inválido
            cy.inserirAddressDetails(''); // Detalhes do endereço inválidos
    
            cy.clicarSuccessButton();
    
            // Verifique se as mensagens de erro aparecem
            cy.validarMensagemErroCpf();
            cy.validarMensagemErroEmail();
            cy.validarMensagemErroWhatsapp();
            cy.validarMensagemErroPostalcode();
        });
    });
});
