const request = require('supertest')
const server = require('../api/server.js')

describe('GET /quote', function () {
    it('respond with json containing the quote of the day', function (done) {
        request(server)
            .get('/api/quote')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    })
})