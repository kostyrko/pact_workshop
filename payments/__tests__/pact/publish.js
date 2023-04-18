let publisher = require('@pact-foundation/pact-node');
const dotevn = require('dotenv');
dotevn.config();

let opts = {
  pactFilesOrDirs: [path.resolve(process.cwd(), '__tests__/pact/contracts')],
  pactBroker: `http://localhost:${PROVIDER_PORT}`,
  consumerVersion: '1.0.0',
  providerVersion: '1.0.0',
  tags: 'dev',
};

publisher.publishPacts(opts);
