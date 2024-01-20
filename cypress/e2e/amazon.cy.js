describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.amazon.com')
    cy.get('#twotabsearchtextbox').click();
    //cy.get('#nav-search-submit-button').click();
    cy.get(':nth-child(5) > .s-suggestion-trending-container > .s-suggestion-trending > .s-heavy').click();
    //cy.get('#nav-cart-count-container').click();
   })
})