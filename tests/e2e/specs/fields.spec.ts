describe('Testing de form', () => {
  it('Visits the app root url', () => {
    cy.visit('/')

    // Check field formular
    cy.contains('Name')
    cy.contains('E-mail')
    cy.contains('Item')

    // Check buttons
    cy.contains('Validate')
    cy.contains('Reset Form')
    cy.contains('Reset Validation')
  })
})
