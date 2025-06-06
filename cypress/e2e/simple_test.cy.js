describe('Simple Test', () => {
  it('should visit the homepage', () => {
    cy.visit('/')
    cy.contains('Get started by editing')
  })
})
