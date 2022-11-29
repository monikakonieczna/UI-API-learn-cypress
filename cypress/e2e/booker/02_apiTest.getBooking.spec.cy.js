import {createBooking, getBookingById} from "../../service/bookingService"
import {getBookingData} from "../../helper/dataGenerator"



describe('Tests for GET Bookings endpoints', () => {
    it('Positive: Get bookings data', () => {
        let bookingData = getBookingData()
        createBooking(bookingData).then(response => {
            cy.log(response.body.bookingid);
            getBookingById(Cypress.env('responses')[0].bookingid).then(response => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('firstname', bookingData.firstname);
                expect(response.body).to.have.property('lastname', bookingData.lastname);
                expect(response.body).to.have.property('totalprice', bookingData.totalprice);
                expect(response.body).to.have.property('depositpaid', bookingData.depositpaid);
                expect(response.body).to.have.property('additionalneeds', bookingData.additionalneeds);
            })
        })
    })
})