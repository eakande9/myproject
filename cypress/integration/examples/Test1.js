/// <reference types="Cypress" />
import generatedata from '../../fixtures/generatedata';
import helper from '../../fixtures/helper';
import homepage from '../../fixtures/pages/homepage';
import checkoutpage from '../../fixtures/pages/checkoutpage';

describe('My First Test Suite', function () {
    let number;
    before(function () {
        number = generatedata.randomNumber()
        //cy.log(`my number ${number}`)
    })
    beforeEach(() => {
        helper.visitUrl("https://rahulshettyacademy.com/seleniumPractise/#/");
        homepage.enterSearchWord('Brocolli')
    })
    it('My First Test Case', () => {
        helper.urlShouldInclude('https://rahulshettyacademy.com/seleniumPractise/#/');
        helper.urlShouldNotInclude('David')
        homepage.enterSearchWord('ca')
        expect(true).to.equal(true)

        //test step
    })

    it('Search Product', () => {
        helper.shouldContain(homepage.getProductName(), 'Brocolli')
    })

    it('Search Weight', () => {
        helper.shouldContain(homepage.getProductName(), '1 Kg')
    })

    it('Find Price', () => {
        helper.shouldContain(homepage.price(), '120')
    })

    it('Add Quantity and Product', function () {
        helper.waitForTimeout(3000)
        helper.clickMultipleTimes(number, homepage.addQuantityButton())
        homepage.clickAddButton()
        const quantity = number + 1
        helper.shouldHaveAttributeValue(homepage.getQuantity(), 'value', quantity)
        const price = 120
        const totalCost = quantity * price
        helper.shouldContain(homepage.getTotalCost(), totalCost)
        helper.shouldContain(homepage.getNumberOfItems(), 1)
    })

})
