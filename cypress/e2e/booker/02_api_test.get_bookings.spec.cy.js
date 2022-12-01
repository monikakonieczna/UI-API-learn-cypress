import {createBooking, getBookingByCheckin, getBookingByCheckout, getBookingByFirstname, getBookingById, getBookingByLastname, getBookingIds} from "../../service/bookingService"
import {getBookingData} from "../../helper/dataGenerator"



describe('Tests for GET Bookings endpoints', () => {
    it('Positive: Get bookings data', () => {
        let bookingData = getBookingData();
        createBooking(bookingData).then(response => {
            expect(response.status).to.eq(200);
            let bookingID = Cypress.env('responses')[0].bookingid;
            let bookingObject = {
                "bookingid":bookingID
            }
            cy.log(bookingID);
            getBookingIds().then(response => {
                expect(response.status).to.eq(200);
                expect(response.body).deep.include(bookingObject);
            })
        })
    })
    it('Positive: Get bookings by firstname', () => {
        let bookingData = getBookingData();
        createBooking(bookingData).then(response => {
            expect(response.status).to.eq(200);
            let firstname = response.body.booking.firstname;
            let bookingID = Cypress.env('responses')[0].bookingid;
            let bookingObject = {
                "bookingid":bookingID
            }
            getBookingByFirstname(firstname).then(response => {
                expect(response.status).to.eq(200);
                expect(response.body).deep.include(bookingObject);
            })
        })
    })
    it('Positive: Get bookings by lastname', () => {
        let bookingData = getBookingData();
        createBooking(bookingData).then(response => {
            expect(response.status).to.eq(200);
            let lastname = response.body.booking.lastname;
            let bookingID = Cypress.env('responses')[0].bookingid;
            let bookingObject = {
                "bookingid":bookingID
            }
            getBookingByLastname(lastname).then(response => {
                expect(response.status).to.eq(200);
                expect(response.body).deep.include(bookingObject);
            })
        })
    })
    it('Positive: Get bookings by checkin date', () => {
        let bookingData = getBookingData();
        createBooking(bookingData).then(response => {
            expect(response.status).to.eq(200);
            let checkin = response.body.booking.bookingdates.checkin;
            let bookingID = Cypress.env('responses')[0].bookingid;
            let bookingObject = {
                "bookingid":bookingID
            }
            getBookingByCheckin(checkin).then(response => {
                expect(response.status).to.eq(200);
                expect(response.body).deep.include(bookingObject);
            })
        })
    })
    it('Positive: Get bookings by checkout date', () => {
        let bookingData = getBookingData();
        createBooking(bookingData).then(response => {
            expect(response.status).to.eq(200);
            let checkout = response.body.booking.bookingdates.checkout;
            let bookingID = Cypress.env('responses')[0].bookingid;
            let bookingObject = {
                "bookingid":bookingID
            }
            getBookingByCheckout(checkout).then(response => {
                expect(response.status).to.eq(200);
                expect(response.body).deep.include(bookingObject);
            })
        })
    })
})