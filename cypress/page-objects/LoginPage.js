class LoginPage {
    
injectCredentials(username, password){
    cy.get('#loginusername').invoke('val', `${username}`);
    cy.get('#loginpassword').invoke('val', `${password}`);
}

submitCredentials(){
    cy.get("button[onclick='logIn()']").click();
}

}
    
export default new LoginPage()
