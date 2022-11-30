import {createBooking, getBookingById, deleteBooking} from "../../service/bookingService"
import {getBookingData} from "../../helper/dataGenerator"
import { faker } from '@faker-js/faker';



describe('Tests for DELETE Booking endpoint', () => {
    let bookingData = getBookingData();

    it('Positive: Delete booking', () => {
        createBooking(bookingData).then(response => {
            let bookingDataId = Cypress.env('responses')[0].bookingid;
            deleteBooking(bookingDataId).then(response => {
                expect(response.status).to.eq(204, 'OK');
            })
        })
    })

    it('Positive: Delete the same booking entity twice', () => {
        createBooking(bookingData).then(response => {
            let bookingDataId = Cypress.env('responses')[0].bookingid;
            deleteBooking(bookingDataId).then(response => {
                expect(response.status).to.eq(204);
                deleteBooking(bookingDataId, false).then(response =>{
                    expect(response.status).to.eq(404, 'Not Found');
                })
            })
        })
    })

    it('Negative: Delete nonexistent booking entity', () => {
        let bookingDataId = "1123";
        deleteBooking(bookingDataId, false).then(response => {
            console.log(response)
            expect(response.status).to.eq(404, 'Not Found');
        })
    })

    it('Negative: Delete booking with invalid id - string instead of number', () => {
        let bookingDataId = faker.commerce.product();
        deleteBooking(bookingDataId, false).then(response => {
            console.log(response)
            expect(response.status).to.eq(405, 'Not Allowed');
        })
        
    })

    it('Negative: Delete booking without id', () => {
        deleteBooking("", false).then(response => {
            cy.log(response)
            expect(response.status).to.eq(404, 'Not Found');
        })
    })


})