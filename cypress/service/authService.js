import {API_URL} from "./apiSettings"

export const createToken = (body, autoControl = true) => {
    return cy.request({
        method: 'POST',
        url: `${API_URL}/auth`,
        headers: {
            'Content-Type': 'application/json', 
            'username' : 'admin',
            'password' : 'password123'
        } ,
        body: body,
        failOnStatusCode: autoControl,
    })
}