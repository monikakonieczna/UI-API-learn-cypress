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

    it('Positive: User can log in with correct credentials.', () => {
        cy.get('@user').then((user) => {
            cy.log('WHEN User clicks Login from menu')
            MainPage.moveToLoginPage();
            cy.log('Then User can see login form window')
            LoginPage
            .injectCredentials(user.valid_user.username, user.valid_user.password);
            LoginPage.submitCredentials();
            MainPage.getLoggedUserInfo().should('contain', user.valid_user.username);

        })
    })

})