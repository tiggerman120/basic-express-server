'use strict';
const { server } = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('web server', () => {
  it('should respond with a 200', () => {
    return mockRequest
      .get('/person?name=fred')
      .then(result => {
        expect(result.status).toBe(200)
      }).catch(console.error);
    })
})

describe('web server', () => {
  it('should respond with a 500', () => {
    return mockRequest
      .get('/person')
      .then(result => {
        expect(result.status).toBe(500)
      }).catch(console.error);
    })
})
