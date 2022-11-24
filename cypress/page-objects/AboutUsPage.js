class AboutUsPage {
    
    startVideo(){
        cy.get('button[title="Play Video"]').click();
    }

    getVideo(){
        return cy.get('div[aria-label="Video Player"]');
    }

    closeWindow(){
        cy.get('#videoModal .modal-footer button').click();
    }

}
    
export default new AboutUsPage()