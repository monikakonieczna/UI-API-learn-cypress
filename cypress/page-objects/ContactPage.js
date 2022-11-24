class ContactPage {

    fillTheForm(email, name, message){
        cy.wait(1000);
        cy.get('#recipient-email').type(`${email}`);
        cy.get('#recipient-name').type(`${name}`, {delay: 100});
        cy.get('#message-text').type(`${message}`, {delay: 100});
    }

    sendMessage(){
        cy.get('button[onclick="send()"]').click();
    }
}

export default new ContactPage()