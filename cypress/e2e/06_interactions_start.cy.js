it('creates a new list and a new card', () => {
  cy.visit('/board/1')

  cy.wait(1000)

  cy.get('body').then($body => {
    if ($body.find('[data-cy="list-name"]').length > 0) {
       // Executa alguma ação se o elemento existir
      cy.get('[data-cy="list-name"]').should('be.visible');
      // Remover a lista para conseguir dar andamento
      cy.get('[data-cy="list"]').each($list => {
        cy.wrap($list).within(() => {
          cy.get('[data-cy="list-options"]').click(); // Clica nas opções da lista
          cy.get('[data-cy="delete-list"]').click(); // Clica no botão de deletar
        });
      });
    } else {
       // create another card
       cy.get('[data-cy="add-list-input"]').type('Groceries{enter}');
       cy.contains('Add another card').click();
       cy.get('[data-cy="new-card-input"]').type('Milk{enter}');

       cy.get('[data-cy="new-card-input"]')
       .type('bread{enter}')

       cy.get('[data-cy="card"]')
       .should('have.length', 2)
    }
  });
})