class ProductPage {
    
    addToCart(){
        cy.get('a[onclick="addToCart(10)"]').click();
    }
}
    
export default new ProductPage()