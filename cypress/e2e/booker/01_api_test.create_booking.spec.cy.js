import {createBooking, createBookingNoBody} from "../../service/bookingService"
import {getBookingData, getNullData} from "../../helper/dataGenerator"

describe('Create new booking', () => {
    it('Positive: Create booking with all required fields', () => {
        let bookingData = getBookingData();
        createBooking(bookingData).then(response => {
            expect(response.status).to.eq(200);
            expect(response.body.booking).to.have.property('firstname', bookingData.firstname);
            expect(response.body.booking).to.have.property('lastname', bookingData.lastname);
            expect(response.body.booking).to.have.property('depositpaid', bookingData.depositpaid);
            expect(response.body.booking).to.have.property('additionalneeds', bookingData.additionalneeds);
            expect(response.body.booking.bookingdates).to.have.property('checkin', bookingData.bookingdates.checkin.toLocaleDateString('fr-CA'));
            expect(response.body.booking.bookingdates).to.have.property('checkout', bookingData.bookingdates.checkout.toLocaleDateString('fr-CA'));
            expect(response.body.booking).to.have.property('totalprice', bookingData.totalprice);
        })
    })
    it('Negative: Create booking with empty body', () => {
        let bookingData = {};
        createBooking(bookingData, false).then(response => {
            expect(response.statusText).to.eq('Bad Request');
            expect(response.status).to.eq(400);
        })
    })
    it('Negative: Create booking without body in the request', () => {
        createBookingNoBody(false).then(response => {
            expect(response.status).to.eq(415);
            expect(response.statusText).to.eq('Unsupported Media Type');
        })
    })
    it('Negative: Create booking with null data in the body', () => {
        let bookingData = getNullData();
        createBooking(bookingData, false).then(response => {
            expect(response.statusText).to.eq('Bad Request');
            expect(response.status).to.eq(400);
        })
    })
})