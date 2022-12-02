import MainPage from "../../page-objects/MainPage"

describe('Tests for product categories change.', () => {
    beforeEach(() => {
        MainPage.open()
    })
    it('Positive: User can choose product category: Phones', () => {
        cy.log('WHEN User clicks Phones category')
        MainPage.performPhonesSearch();
        cy.log('THEN phones are presented on main page')
        MainPage.getProductsList()
        .then( item  => {
            expect(item[0]).to.contain.text('Samsung')
            expect(item[1]).to.contain.text('Nokia')
            expect(item[2]).to.contain.text('Nexus')
            expect(item[3]).to.contain.text('Samsung')
            expect(item[4]).to.contain.text('Iphone')
            expect(item[5]).to.contain.text('Sony')
            expect(item[6]).to.contain.text('HTC') 
        })
    })

    it('Positive: User can choose product category: Laptopes', () => {
        cy.log('WHEN User clicks Laptopes category')
        MainPage.performLaptopesSearch();
        cy.log('THEN laptopes are presented on main page')
        MainPage.getProductsList()
        .then( item  => {
            expect(item[0]).to.contain.text('Sony')
            expect(item[1]).to.contain.text('Sony')
            expect(item[2]).to.contain.text('MacBook air')
            expect(item[3]).to.contain.text('Dell')
            expect(item[4]).to.contain.text('Dell')
            expect(item[5]).to.contain.text('MacBook Pro')
        })
    })

    it('Positive: User can choose product category: Monitors', () => {
        cy.log('WHEN User clicks Monitors category')
        MainPage.performMonitorsSearch();
        cy.log('THEN monitors are presented on main page')
        MainPage.getProductsList()
        .then( item  => {
            expect(item[0]).to.contain.text('Apple monitor')
            expect(item[1]).to.contain.text('ASUS')
        })
    })

})
