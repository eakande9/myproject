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

describe('My First Test Suite', function () {
    let number;
    before(function () {
        number = generatedata.randomNumber()
        cy.log(`my number ${number}`)
    })

    it('Add Brocolli', function () {
        helper.visitUrl("https://rahulshettyacademy.com/seleniumPractise/#/");
        homepage.enterSearchWord('Brocolli')
        helper.waitForTimeout(3000)
        //add multiple items and checkout
        helper.clickMultipleTimes(number, homepage.addQuantityButton())
        homepage.clickAddButton()
    })

    it('Add Cauliflower', function () {
        helper.waitForTimeout(3000)
        homepage.enterSearchWord('Cauliflower')
        helper.waitForTimeout(3000)
        //add multiple items and checkout
        helper.clickMultipleTimes(number, homepage.addQuantityButton())
        homepage.clickAddButton()
    })

    it('Add Cucumber', function () {
        helper.waitForTimeout(3000)
        homepage.enterSearchWord('Cucumber')
        helper.waitForTimeout(3000)
        //add multiple items and checkout
        helper.clickMultipleTimes(number, homepage.addQuantityButton())
        homepage.clickAddButton()
    })

    it('Add Beetroot', function () {
        helper.waitForTimeout(3000)
        homepage.enterSearchWord('Beetroot')
        helper.waitForTimeout(3000)
        //add multiple items and checkout
        helper.clickMultipleTimes(number, homepage.addQuantityButton())
        homepage.clickAddButton()
    })

    it('Checkout', function () {
        homepage.clickProceedCheckout()
        homepage.clickProceedToCheckoutBtn()
    })

    it('Validation of Checkout', function () {
        //validate product name and weight
        helper.shouldContain(checkoutpage.productName(), 'Brocolli', '1 Kg')
        helper.shouldContain(checkoutpage.productName(), 'Cauliflower', '1 Kg')
        helper.shouldContain(checkoutpage.productName(), 'Cucumber', '1 Kg')
        helper.shouldContain(checkoutpage.productName(), 'Beetroot', '1 Kg')
        //validate quantity and price
        const quantity = number + 1
        helper.shouldContain(checkoutpage.totalQuantity(), quantity)
        helper.shouldContain(checkoutpage.productPrice(), 120)
        helper.shouldContain(checkoutpage.productPrice(), 60)
        helper.shouldContain(checkoutpage.productPrice(), 48)
        helper.shouldContain(checkoutpage.productPrice(), 32)
        //validate total cost
        const priceBroccoli = 120
        const totalCostBroccoli = quantity * priceBroccoli
        const priceCauliflower = 60
        const totalCostCauliflower = quantity * priceCauliflower
        const priceCucumber = 48
        const totalCostCucumber = quantity * priceCucumber
        const priceBeetroot = 32
        const totalCostBeetroot = quantity * priceBeetroot
        const totalCost = totalCostBeetroot + totalCostBroccoli + totalCostCauliflower + totalCostCucumber
        helper.shouldContain(checkoutpage.totalCost(), totalCostBroccoli)
        helper.shouldContain(checkoutpage.totalCost(), totalCostCauliflower)
        helper.shouldContain(checkoutpage.totalCost(), totalCostCucumber)
        helper.shouldContain(checkoutpage.totalCost(), totalCostBeetroot)
        helper.shouldContain(checkoutpage.totalAmount(), totalCost)
        //validate total cost with discount amount
        helper.shouldContain(checkoutpage.discountAmount(), totalCost)
    })
})