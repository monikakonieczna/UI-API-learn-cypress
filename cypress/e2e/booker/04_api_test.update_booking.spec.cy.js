import {createBooking, getBookingById, updateBooking, updateBookingNoBody} from "../../service/bookingService"
import {getBookingData} from "../../helper/dataGenerator"
import { faker } from '@faker-js/faker';

describe('Tests for UPDATE (PUT) Booking endpoint', () => {
    it('Positive: Update booking data', () => {
        let bookingData = getBookingData();
        let newBookingData = getBookingData();
        
        createBooking(bookingData).then(response => {
            let newBookingDataId = Cypress.env('responses')[0].bookingid;
            expect(response.status).to.eq(200);
            expect(response.body.booking).to.have.property('firstname', bookingData.firstname);
            expect(response.body.booking).to.have.property('lastname', bookingData.lastname);
            //expect(response.body).to.have.property('totalprice', bookingData.totalprice);
            expect(response.body.booking).to.have.property('depositpaid', bookingData.depositpaid);
            expect(response.body.booking).to.have.property('additionalneeds', bookingData.additionalneeds);
            expect(response.body.booking.bookingdates).to.have.property('checkin', bookingData.bookingdates.checkin.toLocaleDateString('fr-CA'));
            expect(response.body.booking.bookingdates).to.have.property('checkout', bookingData.bookingdates.checkout.toLocaleDateString('fr-CA'));

            updateBooking(newBookingData, newBookingDataId).then(response => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('firstname', newBookingData.firstname);
                expect(response.body).to.have.property('lastname', newBookingData.lastname);
                expect(response.body).to.have.property('depositpaid', newBookingData.depositpaid);
                expect(response.body).to.have.property('additionalneeds', newBookingData.additionalneeds);
                expect(response.body.bookingdates).to.have.property('checkin', newBookingData.bookingdates.checkin.toLocaleDateString('fr-CA'));
                expect(response.body.bookingdates).to.have.property('checkout', newBookingData.bookingdates.checkout.toLocaleDateString('fr-CA'));
                //expect(response.body).to.have.property('totalprice', newBookingData.totalprice);

                getBookingById(newBookingDataId).then( response => {
                    expect(response.status).to.eq(200);
                    expect(response.body).to.have.property('firstname', newBookingData.firstname);
                    expect(response.body).to.have.property('lastname', newBookingData.lastname);
                    expect(response.body).to.have.property('depositpaid', newBookingData.depositpaid);
                    expect(response.body).to.have.property('additionalneeds', newBookingData.additionalneeds);
                    expect(response.body.bookingdates).to.have.property('checkin', newBookingData.bookingdates.checkin.toLocaleDateString('fr-CA'));
                    expect(response.body.bookingdates).to.have.property('checkout', newBookingData.bookingdates.checkout.toLocaleDateString('fr-CA'));
                    //expect(response.body).to.have.property('totalprice', newBookingData.totalprice);
                })
            })
        })
     })
    it('Negative: Update booking data - empty body', () =>{
        let bookingData = getBookingData();
        let newBookingData = {};
        createBooking(bookingData).then(response => {
            let newBookingDataId = Cypress.env('responses')[0].bookingid;
            updateBooking(newBookingData, newBookingDataId, false).then(response => {
                expect(response.status).to.eq(400, 'Bad request');
            })
        })
    })
    it('Negative: Update booking data - no body in a request', () => {
        let newBookingDataId = faker.datatype.number({min: 10000, max: 100000, precision: 0});
        updateBookingNoBody(newBookingDataId, false).then(response => {
            console.log(response);
            expect(response.status).to.eq(400, 'Bad request');
        })
    })
    it('Negative: Update with nonexistent id', () => {
        let newBookingData = getBookingData();
        let newBookingDataId = 1;
        updateBooking(newBookingData, newBookingDataId, false).then(response => {
            expect(response.status).to.eq(405, 'Not allowed');
        })
    })
    it('Negative: Update with invalid booking id - empty', () => {
        let newBookingData = getBookingData();
        let newBookingDataId = "";
        updateBooking(newBookingData, newBookingDataId, false).then(response => {
            expect(response.status).to.eq(404, 'Not found');
        })
    })
    it('Negative: Update with invalid booking id - string instead of number', () => {
        let newBookingData = getBookingData();
        let newBookingDataId = faker.commerce.product();
        updateBooking(newBookingData, newBookingDataId, false).then(response => {
            expect(response.status).to.eq(405, 'Not allowed');
        })
    })

})
