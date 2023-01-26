/// <reference types="Cypress" />

describe('My First Test Suite', () => {
    it('My First Test Case', () => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        expect(true).to.equal(true)

        //test step
    })

    it('Does not do much!', () => {
        expect(true).to.equal(true)
    })
})
