class helper {
    clickMultipleTimes(number, button) {
        for (var i = 0; i < number; i++) {
            cy.get(button).click()
        }
    }
    visitUrl(url) {
        cy.visit(url)
    }

    urlShouldInclude(string) {
        cy.url().should('include', string)
    }

    urlShouldNotInclude(string) {
        cy.url().should('not.include', string)
    }

    clickElement(element) {
        cy.get(element).click()
    }

    clickElementByText(element) {
        cy.contains(element).click()
    }

    typeText(element, text) {
        cy.get(element).type(text)
    }

    waitForTimeout(sec) {
        cy.wait(sec)
    }

    shouldContain(element, string1, string2) {
        cy.get(element).should('contain', string1, string2)
    }

    shouldHaveAttributeValue(element, string1, string2) {
        cy.get(element).should('have.attr', string1, string2)
    }
}
export default new helper