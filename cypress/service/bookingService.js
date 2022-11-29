import {API_URL} from "./apiSettings"

export const createBooking = (body, autoControl = true) => {
    return cy.request({
        method: 'POST',
        url: `${API_URL}/booking`,
        body: body,
        failOnStatusCode: autoControl,
    }).then(({body}) => {
        Cypress.env('responses').push(body);
    })
}

export const updateBooking = (body, ID, autoControl = true) => {
    return cy.request({
        method: 'PUT',
        url: `${API_URL}/booking/${ID}`,
        body: body,
        failOnStatusCode: autoControl,
    })
}

export const partialUpdateBooking = (body, ID, autoControl = true) => {
    return cy.request({
        method: 'PATCH',
        url: `${API_URL}/booking/${ID}`,
        body: body,
        failOnStatusCode: autoControl,
    })
}

export const getBookingById = (ID, autoControl = true) => {
    return cy.request({
        method: 'GET',
        url: `${API_URL}/booking/${ID}`,
        failOnStatusCode: autoControl,
    })
}

export const getBookingIds = (body, autoControl = true) => {
    return cy.request({
        method: 'GET',
        url: `${API_URL}/booking`,
        body: body,
        failOnStatusCode: autoControl,
    })
}

export const deleteBooking = (body, ID, autoControl = true) => {
    return cy.request({
        method: 'DELETE',
        url: `${API_URL}/booking/${ID}`,
        body: body,
        failOnStatusCode: autoControl,
    })
}