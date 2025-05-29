it('creates a new list and a new card', () => {
  cy.visit('/board/1')

  cy.wait((1000))

  cy.get('body').then($body => {
    if ($body.find('[data-cy="list-name"]').length > 0) {
      cy.log('O elemento [data-cy="list-name"] existe.');
      // Executa alguma ação se o elemento existir
      cy.get('[data-cy="list-name"]').should('be.visible');
      cy.get('[data-cy="list"]').each($list => {
        cy.wrap($list).within(() => {
          cy.get('[data-cy="list-options"]').click(); // Clica nas opções da lista
          cy.get('[data-cy="delete-list"]').click(); // Clica no botão de deletar
        });
      });
    } else {
      cy.log('O elemento [data-cy="list-name"] NÃO existe.');
      cy.get('[data-cy="add-list-input"]').type('new list{enter}');
      cy.contains('Add another card').click();
      cy.get('[data-cy="new-card-input"]').type('new card{enter}');
    }
  });
})

it('new test', () => {
  cy.visit('/')
  cy.get('[data-cy="star"]')
    .first()
    .click({force: true})
});