const path = require('path');
const Pact = require("@pact-foundation/pact").Pact;

global.port = 8081;
global.provider = new Pact({
   port: global.port,
   log: path.resolve(process.cwd(), "__tests__/pact/logs", "logs-pact.log"),
   dir: path.resolve(process.cwd(), "__tests__/pact/contracts"),
   spec: 2,
   logLevel: 'INFO',
   pactfile_write_mode: "overwrite",
   consumer: "ConsumerService",
   provider: "ProviderService",
});