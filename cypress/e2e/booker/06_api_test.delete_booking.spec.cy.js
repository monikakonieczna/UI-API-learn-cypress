import {createBooking, getBookingById, deleteBooking} from "../../service/bookingService"
import {getBookingData} from "../../helper/dataGenerator"
import { faker } from '@faker-js/faker';

describe('Tests for DELETE Booking endpoint', () => {
    let bookingData = getBookingData();

    it('Positive: Delete booking', () => {
        createBooking(bookingData).then(response => {
            let bookingDataId = Cypress.env('responses')[0].bookingid;
            deleteBooking(bookingDataId).then(response => {
                //I would expect to see 204 - No content 
                expect(response.status).to.eq(201, 'OK');
            })
        })
    })

    it('Positive: Delete the same booking entity twice', () => {
        createBooking(bookingData).then(response => {
            let bookingDataId = Cypress.env('responses')[0].bookingid;
            deleteBooking(bookingDataId).then(response => {
                //I would expect to see 204 - No content 
                expect(response.status).to.eq(201, 'OK');
                deleteBooking(bookingDataId, false).then(response =>{
                    //I would expect to see 404 - Not Found 
                    expect(response.status).to.eq(405);
                })
            })
        })
    })

    it('Negative: Delete nonexistent booking entity', () => {
        let bookingDataId = "1123";
        deleteBooking(bookingDataId, false).then(response => {
            console.log(response)
            //I would expect to see 404 - Not Found 
            expect(response.status).to.eq(405, 'Method Not Allowed');
        })
    })

    it('Negative: Delete booking with invalid id - string instead of number', () => {
        let bookingDataId = faker.commerce.product();
        deleteBooking(bookingDataId, false).then(response => {
            console.log(response)
            expect(response.status).to.eq(405, 'Method Not Allowed');
        })
        
    })

    it('Negative: Delete booking without id', () => {
        deleteBooking("", false).then(response => {
            cy.log(response)
            expect(response.status).to.eq(404, 'Not Found');
        })
    })


})