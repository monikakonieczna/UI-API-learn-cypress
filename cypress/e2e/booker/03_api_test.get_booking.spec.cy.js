import {createBooking, getBookingById} from "../../service/bookingService"
import {getBookingData} from "../../helper/dataGenerator"



describe('Tests for GET Booking by ID endpoints', () => {
    it('Positive: Get booking by ID', () => {
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
                expect(response.body.bookingdates).to.have.property('checkin', bookingData.bookingdates.checkin);
                expect(response.body.bookingdates).to.have.property('checkout', bookingData.bookingdates.checkout);
            })
        })
    })
    it('Negative: Get booking which does not exist', () => {
        let bookingDataId = "1123";
        getBookingById(bookingDataId, false).then(response => {
            expect(response.status).to.eq(404);
            expect(response.body.message).to.eq('Not Found');
        })
    })
    it('Negative: Get booking with id as a string', () => {
        let bookingDataId = "fakeString";
        getBookingById(bookingDataId, false).then(response => {
            expect(response.status).to.eq(405);
            expect(response.body.message).to.eq('Method Not Allowed');
        })
    })
})