const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const PROVIDER_URL = `http://localhost:${process.env.PORT}`;

let opts = {
  provider: 'Users Service',
  logLevel: 'DEBUG',
  providerBaseUrl: PROVIDER_URL,
  pactUrls: [
    path.resolve(
      process.cwd(),
      '../payments/__tests__/pact/contracts/paymentsservice-usersservice.json'
    ),
  ],
  // pactUrls: ['http://localhost:8080/pacts/provider/UsersService/consumer/PaymentsService/latest'],
  consumerVersionTags: ['dev'],
  providerVersionTagS: ['dev'],
  publishVerificationResult: false,
  // publishVerificationResult: true,
  providerVersion: '1.0.0',
};

module.exports = opts;
