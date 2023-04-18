const { server } = require('./app');
const dotevn = require('dotenv');
dotevn.config();

const port = process.env.CONSUMER_PORT;

server.listen(port, () => {
  console.log(`Payments service running on http://localhost:${port}`);
});
