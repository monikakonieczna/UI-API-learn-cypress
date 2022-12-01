import {API_URL} from "./apiSettings"

export const getPing = (autoControl = true) => {
    return cy.request({
        method: 'GET',
        url: `${API_URL}/ping`,
        failOnStatusCode: autoControl,
    })
}