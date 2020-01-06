/// <reference types="Cypress" />

describe('Second spec', () => {
  it('works', () => {
    cy.wrap('foo').should('equal', 'foo')
  })

  it('works again', () => {
    cy.wait(1000)
      .then(() => {
        expect(true).to.be.true
      })
  })
})
