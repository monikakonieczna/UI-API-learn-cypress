import {getPing} from "../../service/pingService"

describe('Tests for a simple health check endpoint to confirm whether the API is up and running.', () => {

    it('Positive: test if API is up and running',{ tags: 'smoke' }, () => {
        getPing().then(response => {
            expect(response.status).to.eq(201, 'OK');
        })
    })
})