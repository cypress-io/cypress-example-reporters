/// <reference types="Cypress" />

describe('Third spec', () => {
  it('works', () => {
    cy.wrap('foo').should('equal', 'foo')
  })

  it('works again', () => {
    cy.wait(1000)
      .then(() => {
        // break on purpose to show failing test report
        expect(true).to.be.false
      })
  })
})
