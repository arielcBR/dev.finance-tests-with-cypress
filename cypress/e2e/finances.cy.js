describe('Transações', () => {
    beforeEach(() => {
        cy.visit('/'); 
    });

    it('Cadastrar uma entrada', () => {
        criarTransacao("Freela", 500, '2023-03-04');
        cy.get('tr td.description').should('have.text', 'Freela');
    });

    it('Cadastrar uma saída', () => {
        criarTransacao("Cinema", -45, '2023-03-05');
        cy.get('tr td.description').should('have.text', 'Cinema');
    });

    it('Excluir transação', () => {
        criarTransacao("Freela", 500, '2023-03-04');
        cy
            .contains('.description', 'Freela')
            .parent()
            .find('img')
            .click();
        
        cy.get('tbody tr').should('have.length', 0);

    });
});

function criarTransacao(descricao, valor, data='2023-03-06') {
    cy.contains('+ Nova Transação').click();
    cy.get('#description').type(descricao);
    cy.get('#amount').type(valor);
    cy.get('#date').type(data);
    cy.contains('button', 'Salvar').click();
}