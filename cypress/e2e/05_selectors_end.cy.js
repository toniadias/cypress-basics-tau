it('my first test', () => {
  cy.visit('/')
  // select first element
  cy.get('[data-cy=board-item]')
    .first()
  
  // select last element
  cy.get('[data-cy=board-item]')
    .last()

  //valida quantos boards tem ativo
  cy.get('.board').its('length').then(size => {
    if(size > 1) {
    // select element based on index number
      cy.get('[data-cy=board-item]')
        .eq(1)
    }
  });

  // find more ways of selecting elements on
  // https://docs.cypress.io/api/table-of-contents#Queries
});