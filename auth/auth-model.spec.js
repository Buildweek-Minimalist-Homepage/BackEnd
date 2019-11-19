const request = require('supertest')
const db = require('../data/dbConfig');
const Users = require('./auth-model');
const server = require('../api/server')

describe('Users Model', () => {
    beforeEach(async () => {
        await db('users').truncate();
    });

    describe('Add new user', () => {
        // it('Should be empty', async () => {
        //     const users = await db('users');
        //     expect(users).toHaveLength(0);
        // })

        // it('Should add a new user', async () => {
        //     await Users.add({ username: 'alexia', password: 'cats' });
        //     const users = await db('users');
        //     expect(users).toHaveLength(1);
        // })

        // it('Should only add a new user when password is specified', async () => {
        //     await Users.add({ username: 'thisiswrong' })
        //     const users = await db('users');
        //     expect(users).toHaveLength(1);
        // }) 

        it('responds with 201 OK', async done => {
            await request(server)
              .post('/api/auth/register')
              .send({ email: 'new@email.com', password: 'pass01' })
              .expect(201);
      
            done();
          });

          it('responds with JSON', async done => {
            await request(server)
              .post('/api/auth/register')
              .send({ email: 'new@email.com', password: 'pass01' })
              .expect('Content-Type', /json/i);
      
            done();
          });

    })
})