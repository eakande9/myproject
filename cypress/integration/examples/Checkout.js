/// <reference types="Cypress" />
import generatedata from '../../fixtures/generatedata';
import helper from '../../fixtures/helper';
import checkoutpage from '../../fixtures/pages/checkoutpage';
import homepage from '../../fixtures/pages/homepage';

describe('My First Test Suite', function () {
    let number;
    before(function () {
        number = generatedata.randomNumber()
        cy.log(`my number ${number}`)
    })
    beforeEach(() => {
        //navigate url and use the search bar
        helper.visitUrl("https://rahulshettyacademy.com/seleniumPractise/#/");
        homepage.enterSearchWord('Brocolli')
        helper.waitForTimeout(3000)
        //add multiple items and checkout
        helper.clickMultipleTimes(number, homepage.addQuantityButton())
        homepage.clickAddButton()
        homepage.clickProceedCheckout()
        homepage.clickProceedToCheckoutBtn()
    })

    it('Checkout', function () {
        //validate place order button
        helper.shouldContain(checkoutpage.orderButton(), 'Place Order')
    })

    it('Validation of Checkout', function () {
        //validate product name and weight
        helper.shouldContain(checkoutpage.productName(), 'Brocolli', '1 Kg')
        //validate quantity and price
        const quantity = number + 1
        helper.shouldContain(checkoutpage.totalQuantity(), quantity)
        helper.shouldContain(checkoutpage.productPrice(), 120)
        //validate total cost
        const price = 120
        const totalCost = quantity * price
        helper.shouldContain(checkoutpage.totalCost(), totalCost)
        helper.shouldContain(checkoutpage.totalAmount(), totalCost)
        //validate total cost with discount amount
        helper.shouldContain(checkoutpage.discountAmount(), totalCost)
    })
})