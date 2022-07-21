describe('Alura busca cursos', () => {

    beforeEach(() => {
        cy.visit('https://www.alura.com.br/')
    })

    it('Buscando curso java', () => {
        cy.get('#header-barraBusca-form-campoBusca').type('Java');
        cy.get('.header-barraBusca-form-submit').click();
        cy.get('h4.busca-resultado-nome').should('contain', 'Formação Java e Orientação a Objetos');

    })
})