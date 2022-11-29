import { faker } from '@faker-js/faker';

export const getBookingData = () => {
    return {
        firstname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        totalprice: faker.finance.amount(),
        depositpaid: faker.datatype.boolean(),
        bookingdates: {
            checkin: '2022-12-01',
            checkout: '2022-12-10'
        },
        additionalneeds: faker.commerce.productName()
    }
}