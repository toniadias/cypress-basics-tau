it('test passes', () => {
    cy.visit('/')
})

it('test fails', () =>{
    cy.visit('/')
    expect(true).to.be.false
})

//npx cypress run --browser firefox
//npx cypress run --browser firefox --headed