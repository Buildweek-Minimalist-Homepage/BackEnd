const request = require('supertest')
// const db = require('../database/dbConfig.js')
const server = require('../api/server.js')

describe('POST /register', function () {
    let data = {
        "name": "dummy",
        "email": "dummy",
        "password": "dummypassword"
    }
    it('respond with 201 created', function (done) {
        request(server)
            .post('/api/auth/register')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});

describe('POST /register', function () {
    let data = {
        "name": "dummy",
        "email": "dummy",
        "password": "dummy"
    }
    it('respond with 400 not created', function (done) {
        request(server)
            .post('/api/auth/register')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400)
            .end((err) => {
                if(err) return done(err);
                done();
            })
    })
})

describe('POST /login', function () {
    let data = {
        "email" : "dummy@test.com",
        "password" : "password"
    }

    it('respond with 200 ', function (done) {
        request(server)
            .post('/api/auth/login')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err) => {
                if(err) return done(err);
                done()
            })

    })
})

describe('POST /login', function () {
    let data = {
        "user_id": "1",
        "password": "password"
    }
    it('respond with 400 not created', function (done) {
        request(server)
            .post('/api/auth/login')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400)
            .end((err) => {
                if(err) return done(err);
                done();
            })
    })
})

describe('POST /todo', function () {
    let data = {
        "user_id": "1" ,
        "todo_item":"dummy" ,
        "isCompleted": false,
    }
    it('respond with 200 created', function (done) {
        request(server)
            .post('/api/auth/todo')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err) => {
                if(err) return done(err);
                done();
            })
    })
})