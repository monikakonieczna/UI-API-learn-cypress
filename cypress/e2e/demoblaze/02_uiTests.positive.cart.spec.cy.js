import MainPage from "../../page-objects/mainPage"
import ProductPage from "../../page-objects/ProductPage"
import CartPage from "../../page-objects/CartPage"

describe('Tests for CART feature. Adding, deleting products and cart overview.', () => {
    beforeEach(() => {
        MainPage.open()
    })
    it('Positive: User can add monitor to the cart', () => {
        cy.log('WHEN User clicks Monitors category')
        MainPage.performMonitorsSearch();
        cy.log('THEN monitors are presented on main page')
        cy.wait(1000)
        MainPage.getProductsList()
        .then( item  => {
            expect(item[0]).to.contain.text('Apple monitor')
            expect(item[1]).to.contain.text('ASUS')
        })
        cy.log('AND User clicks on first product on the list')
        MainPage.chooseFirstProduct().click();
        cy.log('WHEN User adds product to the cart')
        ProductPage.addToCart();
        cy.log('THEN alert about succesful operation pops-up')
        cy.on ('window:alert', (text) => {
            expect(text).to.contains('Product added');
        })
        cy.log('WHEN user moves to the cart')
        MainPage.moveToCart();
        cy.log('THEN user can see added monitor on the list')
        CartPage.getProductsInCart()
        .then( item  => {
            expect(item[0]).to.contain.text('Apple monitor');
        })
        cy.log('AND total price should be OK')
        CartPage.getTotalPrice().should('have.text', '400');
    })

})
