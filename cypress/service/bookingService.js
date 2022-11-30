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
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            //'Cookie': 'token=abc123'
            'authorization': 'Basic YWRtaW46cGFzc3dvcmQxMjM='
        },
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

export const deleteBooking = (ID, autoControl = true) => {
    return cy.request({
        method: 'DELETE',
        url: `${API_URL}/booking/${ID}`,
        headers: {
            'Content-Type': 'application/json',
            'authorization': 'Basic YWRtaW46cGFzc3dvcmQxMjM='
        },
        failOnStatusCode: autoControl,
    })
}