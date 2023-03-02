const path = require('path');
const { Verifier } = require('@pact-foundation/pact');
const { server } = require('../src/app');
const opts = require('./config');
const dotenv = require('dotenv');

dotenv.config();

server.listen(process.env.PORT, () => {
  console.log(`Users Service listening on ${process.env.PORT}`);
});

describe('Users Service Verification', () => {
  it('validates the expectations of Payments Service', () => {
    return new Verifier(opts).verifyProvider().then((output) => {
      console.log('Pact Verification Complete!');
      console.log(output);
    });
  });
});
