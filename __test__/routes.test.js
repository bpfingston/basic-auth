'use strict';

const app = require ('../src/server');
const { db } = require('../src/model');
const supertest = require('supertest');
const request = supertest(app.app)
const base64 = require('base-64');

beforeAll(async () => await db.sync());
afterAll(async () => await db.drop());

describe('testing routes & middleware', () => {
    it('should create a newUser, registered to the Database', async () => {
        const response = await request.post ('/signup').send({
            username:'Bryce',
            password:'Anthony'
        });
        expect(response.status).toBe(201);
        expect(response.body.username).toEqual('Bryce');
    });
    it('should check that there is a matching user within the Database', async () => {
        let encoded = base64.encode('Bryce:Anthony');
        const response = await request.post('/signin').set("authorization", `Basic ${encoded}`);
        expect(response.body.username).toEqual('Bryce');
    });
});