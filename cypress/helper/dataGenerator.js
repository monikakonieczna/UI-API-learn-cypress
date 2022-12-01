import { faker } from '@faker-js/faker';

export const getBookingData = () => {
    const start_date = faker.date.soon();
    const end_date = faker.date.soon(5, start_date);
    return {
        
        firstname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        totalprice: faker.finance.amount(),
        depositpaid: faker.datatype.boolean(),
        bookingdates: {
            checkin: start_date,
            checkout: end_date,
        },
        additionalneeds: faker.commerce.productName()
    }
}

export const getNullData = () => {
    return {
        
        firstname: null,
        lastname: null,
        totalprice: null,
        depositpaid: null,
        bookingdates: {
            checkin: null,
            checkout: null,
        },
        additionalneeds: null
    }
}