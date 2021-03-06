/* global supertest*/
'use strict'; 

const app = require('../src/app');

describe.skip('App', () => {
  it('GET / responds with 200 containing "Hello, boilerplate!"', () => {
    return supertest(app)
      .get('/')
      .expect(200, 'Hello, boilerplate!');
  });
});