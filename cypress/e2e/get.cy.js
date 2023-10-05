describe('api', () => {

  it('passes', () => {
    cy.request('GET','https://code.visualstudio.com')
    .its('status')
    .should('equal',200);
  })

   
})