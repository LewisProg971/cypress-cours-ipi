/// <reference types="cypress" />

describe('index.html', () => {
    beforeEach(() => {
        cy.visit('../../app/index.html')
    })

    it('should display the correct title "Hello World!"', () => {
        cy.get('p').should('have.text', 'Hello World!')
    })
})