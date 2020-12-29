'use strict';
const { server } = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(server);
const validatorMiddleware = require('../src/middleware/validator');
const { it, expect } = require('@jest/globals');

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

describe('validator middleware', () => {

  it('allows requests with a name', () => {
    let req = { query: { name: "Test"} };
    let res = {};
    let next = jest.fn();//built into jest to spy on the next method

    validatorMiddleware(req, res, next);
    expect(next).toHaveBeenCalledWith();//no parameters

  })
  it('does not allow requests without a name', () => {
    let req = { query: {} };
    let res = {};
    let next = jest.fn();

    validatorMiddleware(req, res, next);
    expect(next).toHaveBeenCalledWith('requires a name');
  })
})



