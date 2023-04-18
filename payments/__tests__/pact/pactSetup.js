const path = require('path');
const Pact = require('@pact-foundation/pact').Pact;
const dotevn = require('dotenv');
dotevn.config();

global.port = Number(process.env.PROVIDER_PORT);
global.provider = new Pact({
  port: global.port,
  log: path.resolve(process.cwd(), '__tests__/pact/logs', 'logs-pact.log'),
  dir: path.resolve(process.cwd(), '__tests__/pact/contracts'),
  spec: 2,
  logLevel: 'INFO',
  pactfile_write_mode: 'overwrite',
  consumer: 'PaymentsService',
  provider: 'UsersService',
  host: 'localhost',
});
