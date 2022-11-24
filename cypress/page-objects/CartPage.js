class CartPage {
    
    getProductsInCart(){
        return cy.get('.success td:nth-child(2)');
    }

    getTotalPrice(){
        return cy.get('#totalp');
    }
}
    
export default new CartPage()