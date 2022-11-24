class MainPage {

    open() {
        cy.visit(`${Cypress.env('blazleURL')}`);
    }

    performPhonesSearch() {
        cy.get('.list-group-item:nth-of-type(2)').click();
    }

    performLaptopesSearch() {
        cy.get('.list-group-item:nth-of-type(3)').click();
    }

    performMonitorsSearch() {
        cy.get('.list-group-item:nth-of-type(4)').click();
    }

    moveToLoginPage(){
        cy.get('a[data-target="#logInModal"]').click();
    }

    moveToContactPage(){
        cy.get('a[data-target="#exampleModal"]').click().wait(0);
    }

    moveToAboutUsPage(){
        cy.get('a[data-target="#videoModal"]').click();
    }

    moveToCart(){
        cy.get('#cartur').click();
    }

    getLoggedUserInfo(){
        return cy.get('#nameofuser');
    }

    logOut(){
        cy.get('#logout2"]').click();
    }

    getProductsList(){
        return cy.get('.card-block a')
     }
 
     chooseFirstProduct(){
         return cy.get('.card-block a').first();
     }

}

export default new MainPage()