import helper from "../helper";

// Selectors
const title = '.brand.greenLogo';
const searchBar = 'input.search-keyword';
const submitSearch = 'button.search-button';
const addToCartBtn = '.product-action > button';
const addQuantity = 'a.increment';
const productPrice = 'p.product-price';
const checkout = '.cart-icon > img';
const productName = 'h4.product-name';
const quantity = 'input.quantity';
const totalCost = ':nth-child(2) > :nth-child(3) > strong';
const numberOfItems = ':nth-child(1) > :nth-child(3) > strong';

class homepage {
    // page Elements
    pageTitle() {
        return title;
    }
    searchField() {
        return searchBar
    }
    submitButton() {
        return submitSearch
    }
    addButton() {
        return addToCartBtn
    }
    addQuantityButton() {
        return addQuantity
    }
    getQuantity() {
        return quantity;
    }
    price() {
        return productPrice;
    }
    proceedCheckout() {
        return checkout;
    }
    getProductName() {
        return productName;
    }
    getTotalCost() {
        return totalCost;
    }
    getNumberOfItems() {
        return numberOfItems;
    }
    getProceedToCheckoutBtn() {
        return 'PROCEED TO CHECKOUT';
    }

    //page Methods
    enterSearchWord(text) {
        helper.waitForTimeout(3000)
        helper.clickElement(searchBar)
        helper.typeText(searchBar, text);
    }
    clickAddQuantityButton() {
        helper.waitForTimeout(3000)
        //cy.get(addQuantity).click()
        helper.clickElement(addQuantity)
    }
    clickAddButton() {
        helper.waitForTimeout(3000)
        helper.clickElement(addToCartBtn)
    }
    clickProceedCheckout() {
        helper.waitForTimeout(3000)
        helper.clickElement(checkout)
    }
    clickProceedToCheckoutBtn() {
        helper.waitForTimeout(3000)
        helper.clickElementByText(this.getProceedToCheckoutBtn())
    }

}
export default new homepage;