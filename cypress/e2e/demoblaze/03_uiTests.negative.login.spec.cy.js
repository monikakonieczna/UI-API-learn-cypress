import MainPage from "../../page-objects/MainPage"
import LoginPage from "../../page-objects/LoginPage"

describe('Tests for LOG IN feature.', () => {
    beforeEach(() => {
        cy.fixture('users').then((data) =>
        {
            cy.wrap(data).as('user')
        })

        MainPage.open()
    })

    it('Negative: User can not log in with incorrect credentials.', () => {
        cy.get('@user').then((user)=>{
            cy.log('WHEN User clicks Login from menu')
            MainPage.moveToLoginPage();
            cy.log('Then User can see login form window')
            LoginPage
            .injectCredentials(user.invalid_user.username, user.invalid_user.password);
            LoginPage.submitCredentials();

            cy.on ('window:alert', (text)=>{
                expect(text).to.contains('Wrong password.');
            })
        })
    })

})