// Selectors
const title = '.brand.greenLogo';
const searchBar = 'input.search-keyword';
const submitSearch = 'button.search-button';
const addToCartBtn = '.product-action > button';
const addQuantity = 'a.increment'
const productPrice = 'p.product-price'
const checkout = '.cart-icon > img'

class homepage {
    // page Elements
    pageTitle() {
        return cy.get(title);
    }
    searchField() {
        return cy.get(searchBar)
    }
    submitButton() {
        return cy.get(submitSearch)
    }
    addButton() {
        return cy.get(addToCartBtn)
    }
    addQuantityButton() {
        return cy.get(addQuantity)
    }
    price() {
        return cy.get(productPrice)
    }
    proceedCheckout() {
        return cy.get(checkout)
    }

    //page Methods
    enterSearchWord(text) {
        cy.wait(3000)
        cy.get(searchBar).click()
        cy.get(searchBar).type(text);
    }
    clickAddQuantityButton() {
        cy.wait(3000)
        cy.get(addQuantity).click()
    }
    clickAddButton() {
        cy.wait(3000)
        cy.get(addToCartBtn).click()
    }
    clickProceedCheckout() {
        cy.wait(3000)
        cy.get(checkout).click()
    }

}
export default new homepage;