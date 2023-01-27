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
        //navigate url and use the search bar
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        myref.enterSearchWord('Brocolli')
        cy.wait(3000)
        //add multiple items and checkout
        helper.clickMultipleTimes(number, homepage.addQuantityButton())
        myref.clickAddButton()
        myref.clickProceedCheckout()
        cy.contains('PROCEED TO CHECKOUT').click()
    })

    it('Checkout', function () {
        //validate place order button
        cy.get(':nth-child(14)').should('contain', 'Place Order')
    })

    it('Validation of Checkout', function () {
        //validate product name and weight
        cy.get('.product-name').should('contain', 'Brocolli', '1 Kg')
        //validate quantity and price
        const quantity = number + 1
        cy.get('.quantity').should('contain', quantity)
        cy.get(':nth-child(4) > .amount').should('contain', 120)
        //validate total cost
        const price = 120
        const totalCost = quantity * price
        cy.get(':nth-child(5) > .amount').should('contain', totalCost)
        cy.get('.totAmt').should('contain', totalCost)
        //validate total cost with discount amount
        cy.get('.discountAmt').should('contain', totalCost)
    })
})