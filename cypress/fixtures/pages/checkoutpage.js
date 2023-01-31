import homepage from '../../fixtures/pages/homepage'
import helper from '../../fixtures/helper';

// Selectors
const placeOrder = ':nth-child(14)'
const nameAndWeight = 'p.product-name'
const quantity = 'p.quantity'
const price = ':nth-child(4) > .amount'
const total = ':nth-child(5) > .amount'
const totalAmt = '.totAmt'
const discountAmt = '.discountAmt'

class checkoutpage {
    // page Elements
    orderButton() {
        return placeOrder;
    }
    productName() {
        return nameAndWeight;
    }
    totalQuantity() {
        return quantity;
    }
    productPrice() {
        return price;
    }
    totalCost() {
        return total;
    }
    totalAmount() {
        return totalAmt;
    }
    discountAmount() {
        return discountAmt;
    }
    getProceedToCheckoutBtn() {
        return 'PROCEED TO CHECKOUT';
    }

    //page methods
    clickCheckout(product, number, button) {
        //use the search bar
        homepage.enterSearchWord(product)
        helper.waitForTimeout(3000)
        //add multiple items and checkout
        helper.clickMultipleTimes(number, button)
        //homepage.clickAddButton()
        helper.clickElement(homepage.addButton())
        //homepage.clickCart()
        helper.clickElement(homepage.proceedCheckout());
        helper.clickElement(this.proceedToCheckout);
    }

}
export default new checkoutpage;