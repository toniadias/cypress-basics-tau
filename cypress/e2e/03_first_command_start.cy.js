it('my first test', () => {
    cy.visit('/')

    cy.get('h2').click(); 
});