import {createBooking, partialUpdateBooking} from "../../service/bookingService"
import {getBookingData} from "../../helper/dataGenerator"

describe('Tests for partial UPDATE (PATCH) Booking endpoint', () => {
    it('Positive: Update only firstname field', () => {
        let bookingData = getBookingData();
        createBooking(bookingData).then(response => {
            let bookingId = Cypress.env('responses')[0].bookingid;
            cy.fixture('update_firstname').as('body');
            cy.get('@body').then( fixture => {
                partialUpdateBooking(fixture, bookingId).then(response => {
                    expect(response.status).to.eq(200);
                    expect(response.body).to.have.property('firstname', fixture.firstname);
                    expect(response.body).to.have.property('lastname', bookingData.lastname);
                    expect(response.body).to.have.property('depositpaid', bookingData.depositpaid);
                })
            })
        })
    })
    it('Positive: Update only lastname field', () => {
        let bookingData = getBookingData();
        createBooking(bookingData).then(response => {
            let bookingId = Cypress.env('responses')[0].bookingid;
            cy.fixture('update_lastname').as('body');
            cy.get('@body').then( fixture => {
                partialUpdateBooking(fixture, bookingId).then(response => {
                    expect(response.status).to.eq(200);
                    expect(response.body).to.have.property('lastname', fixture.lastname);
                    expect(response.body).to.have.property('firstname', bookingData.firstname);
                    expect(response.body).to.have.property('depositpaid', bookingData.depositpaid);
                })
            })
        })
    })
    it('Positive: Update only lastname and firstname fields', () => {
        let bookingData = getBookingData();
        createBooking(bookingData).then(response => {
            let bookingId = Cypress.env('responses')[0].bookingid;
            cy.fixture('update_firstname_lastname').as('body');
            cy.get('@body').then( fixture => {
                partialUpdateBooking(fixture, bookingId).then(response => {
                    expect(response.status).to.eq(200);
                    expect(response.body).to.have.property('lastname', fixture.lastname);
                    expect(response.body).to.have.property('firstname', fixture.firstname);
                    expect(response.body).to.have.property('depositpaid', bookingData.depositpaid);
                })
            })
        })
    })
    it('Positive: Update only totalprice field', () => {
        let bookingData = getBookingData();
        createBooking(bookingData).then(response => {
            let bookingId = Cypress.env('responses')[0].bookingid;
            cy.fixture('update_totalprice').as('body');
            cy.get('@body').then( fixture => {
                partialUpdateBooking(fixture, bookingId).then(response => {
                    expect(response.status).to.eq(200);
                    expect(response.body).to.have.property('lastname', bookingData.lastname);
                    expect(response.body).to.have.property('firstname', bookingData.firstname);
                    expect(response.body).to.have.property('depositpaid', bookingData.depositpaid);
                    expect(response.body).to.have.property('totalprice', fixture.totalprice);
                })
            })
        })
    })
})