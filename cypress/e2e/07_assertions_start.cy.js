/// <reference types="cypress" />

it('cards are visible', () => {

  cy.visit('/board/1')

  cy.get('[data-cy="create-list"]').click();

  // create another card
  cy.get('[data-cy="add-list-input"]')
  .type('Drogstore{enter}')
  

  cy.get('[data-cy="list"]')  
  .each(($list) => {  
    cy.wrap($list)
      .find('[data-cy="list-name"]')  
      .then($listName => {
        if ($listName.val().includes('Drogstore')) {  
          cy.wrap($list)
            .find('[data-cy="new-card"]') 
            .click();
          
          cy.get('[data-cy="new-card-input"]')  
            .type('soap{enter}');
          
          cy.get('[data-cy="new-card-input"]')  
            .type('shampoo{enter}');
        }
      });
  });
})

