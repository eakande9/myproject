/// <reference types="Cypress" />
import myref from '../../fixtures/pages/homepage'
import generatedata from '../../fixtures/generatedata';
import helper from '../../fixtures/helper';
import homepage from '../../fixtures/pages/homepage';

describe('My First Test Suite', function () {
    let number;
    before(function () {
        number = generatedata.randomNumber()
        cy.log(`my number ${number}`)
    })
    beforeEach(() => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        myref.enterSearchWord('Brocolli')
    })
    it('My First Test Case', () => {
        cy.url().should('include', 'https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.url().should('not.include', 'David')
        cy.get('.search-keyword').type('ca')
        expect(true).to.equal(true)

        //test step
    })

    it('Search Product', () => {
        cy.get('h4.product-name').should('contain', 'Brocolli')
    })

    it('Search Weight', () => {
        cy.get('h4.product-name').should('contain', '1 Kg')
    })

    it('Find Price', () => {
        cy.get('p.product-price').should('contain', '120')

        //test step
    })

    it('Add Quantity and Product', function () {
        cy.wait(3000)
        helper.clickMultipleTimes(number, homepage.addQuantityButton())
        myref.clickAddButton()
        const quantity = number + 1
        cy.get('input.quantity').should('have.attr', 'value', quantity)
        const price = 120
        const totalCost = quantity * price
        cy.get(':nth-child(2) > :nth-child(3) > strong').should('contain', totalCost)
        cy.get(':nth-child(1) > :nth-child(3) > strong').should('contain', 1)
    })

    it('Checkout', function () {
        cy.wait(3000)
        helper.clickMultipleTimes(number, homepage.addQuantityButton())
        myref.clickAddButton()
        myref.clickProceedCheckout()
        cy.contains('PROCEED TO CHECKOUT').click()
    })
})
