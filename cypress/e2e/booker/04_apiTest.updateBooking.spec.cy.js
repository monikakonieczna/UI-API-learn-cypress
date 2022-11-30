import {createBooking, getBookingById, updateBooking} from "../../service/bookingService"
import {getBookingData} from "../../helper/dataGenerator"
import { createToken } from "../../service/tokenService"
import { faker } from '@faker-js/faker';
import {API_URL} from "../../service/apiSettings"

describe('Tests for UPDATE (PUT) Bookings endpoints', () => {
    it('Positive: Update booking data', () => {
        let bookingData = getBookingData();
        let newBookingData = getBookingData();
        createBooking(bookingData).then(response => {
            let newBookingDataId = Cypress.env('responses')[0].bookingid;
            //cy.log(response.body.bookingid);
            //cy.log(newBookingDataId);
            //cy.log(Cypress.env('responses')[0].bookingid)
            updateBooking(newBookingData, newBookingDataId).then(response => {
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
        let bookingData = getBookingData();
        let newBookingDataId = faker.datatype.number({min: 10000, max: 100000, precision: 0});
        cy.request({
            method: 'PUT',
            url: `${API_URL}/booking/${newBookingDataId}`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                //'Cookie': 'token=abc123'
                authorization: 'Basic YWRtaW46cGFzc3dvcmQxMjM='
            },
            failOnStatusCode: false,
        }).then(response => {
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