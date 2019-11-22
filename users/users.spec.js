const request = require('supertest')
// const db = require('../database/dbConfig.js')
const server = require('../api/server.js')

describe('GET /users', function () {
    it('respond with json containing a list of all users', function (done) {
        request(server)
            .get('/api/users')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    })
})

describe('GET /users/:id', function() {
    it('respond with json containing a single user', function (done) {
        request(server)
            .get('/api/users/1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    })
})

describe('GET /users/:id', function () {
    it('respond with json user not found', function (done) {
        request(server)
            .get('/api/users/idisnonexisting')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(404)
            .end((err) => {
                if(err) return done(err);
                done();
            })
    })
})

