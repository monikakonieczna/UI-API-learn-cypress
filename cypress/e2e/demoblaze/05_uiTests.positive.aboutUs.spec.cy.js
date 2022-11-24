import AboutUsPage from "../../page-objects/AboutUsPage"
import MainPage from "../../page-objects/MainPage"

describe('Tests for CONTACT feature.', () => {
    beforeEach(() => {
        MainPage.open()
    })
    it('Positive: User can watch video about company.', () => {
        MainPage.moveToAboutUsPage();
        AboutUsPage
        .getVideo()
        .invoke('attr', 'class')
        .should('contain', 'vjs-paused');
        AboutUsPage.startVideo();
        AboutUsPage
        .getVideo()
        .invoke('attr', 'class')
        .should('contain', 'vjs-playing');

        
    })
})