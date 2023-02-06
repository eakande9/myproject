/// <reference types="Cypress" />
import generatedata from '../../fixtures/generatedata';
import helper from '../../fixtures/helper';
import checkoutpage from '../../fixtures/pages/checkoutpage';
import homepage from '../../fixtures/pages/homepage';

/* describe('My First Test Suite', function () {
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
}) */

describe('My First Test Suite', function () {
    let number;
    let number1;
    let number2;
    let number3;
    let number4;
    let product;
    before(function () {
        /*if (product == 'Brocolli') {
            number1 = generatedata.randomNumber()
            number = number1
        } else if (product == 'Cucumber') {
            number2 = generatedata.randomNumber()
            number = number2
        } else if (product == 'Beetroot') {
            number3 = generatedata.randomNumber()
            number = number3
        } else if (product == 'Cauliflower') {
            number4 = generatedata.randomNumber()
            number = number4
        }
         number = generatedata.randomNumber()
        cy.log(`my number ${number}`) */
    })

    beforeEach(() => {
        //navigate url and use the search bar
        helper.visitUrl("https://rahulshettyacademy.com/seleniumPractise/#/");
        /*  homepage.enterSearchWord('Brocolli')
         helper.waitForTimeout(3000)
         //add multiple items and checkout
         helper.clickMultipleTimes(number, homepage.addQuantityButton())
         homepage.clickAddButton()
         homepage.clickProceedCheckout()
         homepage.clickProceedToCheckoutBtn() */
    })

    it.only('multiple checkout', function () {
        //checkoutMultipleProducts(vegetables, number, button) {
        const product = ['Brocolli', 'Cucumber', 'Beetroot', 'Cauliflower'];
        product.forEach(function (product) {
            if (product == 'Brocolli') {
                number1 = generatedata.randomNumber()
                number = number1
            } else if (product == 'Cucumber') {
                number2 = generatedata.randomNumber()
                number = number2
            } else if (product == 'Beetroot') {
                number3 = generatedata.randomNumber()
                number = number3
            } else if (product == 'Cauliflower') {
                number4 = generatedata.randomNumber()
                number = number4
            }
            homepage.enterSearchWord(product)
            helper.waitForTimeout(3000)
            //helper.clickMultipleTimes(number, homepage.clickAddQuantityButton())
            helper.clickMultipleTimes(number, homepage.addQuantityButton())
            helper.clickElement(homepage.addButton())
        })
        helper.clickElement(homepage.proceedCheckout());
        homepage.clickProceedToCheckoutBtn()
        const brocolliQuantity = number1 + 1
        const cucumberQuantity = number2 + 1
        const beetrootQuantity = number3 + 1
        const cauliflowerQuantity = number4 + 1
        helper.shouldContain(checkoutpage.totalQuantity(), brocolliQuantity)
        helper.shouldContain(checkoutpage.totalQuantity(), cucumberQuantity)
        helper.shouldContain(checkoutpage.totalQuantity(), beetrootQuantity)
        helper.shouldContain(checkoutpage.totalQuantity(), cauliflowerQuantity)
        helper.shouldContain(checkoutpage.productPrice(), 120)
        helper.shouldContain(checkoutpage.productPrice(), 60)
        helper.shouldContain(checkoutpage.productPrice(), 48)
        helper.shouldContain(checkoutpage.productPrice(), 32)
        //validate total cost
        const priceBroccoli = 120
        const totalCostBroccoli = brocolliQuantity * priceBroccoli
        const priceCauliflower = 60
        const totalCostCauliflower = cauliflowerQuantity * priceCauliflower
        const priceCucumber = 48
        const totalCostCucumber = cucumberQuantity * priceCucumber
        const priceBeetroot = 32
        const totalCostBeetroot = beetrootQuantity * priceBeetroot
        const totalCost = totalCostBeetroot + totalCostBroccoli + totalCostCauliflower + totalCostCucumber
        helper.shouldContain(checkoutpage.totalCost(), totalCostBroccoli)
        helper.shouldContain(checkoutpage.totalCost(), totalCostCauliflower)
        helper.shouldContain(checkoutpage.totalCost(), totalCostCucumber)
        helper.shouldContain(checkoutpage.totalCost(), totalCostBeetroot)
        helper.shouldContain(checkoutpage.totalAmount(), totalCost)
        //validate total cost with discount amount
        helper.shouldContain(checkoutpage.discountAmount(), totalCost)
    })

    it('Checkout', function () {
        //validate place order button
        helper.shouldContain(checkoutpage.orderButton(), 'Place Order')
    })


})