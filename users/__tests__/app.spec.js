const path = require('path');
const { Verifier } = require('@pact-foundation/pact');
const { server } = require('../src/app');
const opts = require('./config');
const dotenv = require('dotenv');

dotenv.config();
jest.setTimeout(30000);

port = process.env.PROVIDER_PORT;

server.listen(port, () => {
  console.log(`Users Service listening on ${port}`);
});

describe('Users Service Verification', () => {
  it('validates the expectations of Payments Service', () => {
    return new Verifier(opts).verifyProvider().then((output) => {
      console.log('Pact Verification Complete!');
      console.log(output);
    });
  });
});
