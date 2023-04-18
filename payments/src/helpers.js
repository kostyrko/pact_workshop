const cors = require('cors');
const bodyParser = require('body-parser');

const configureServer = (server) => {
  server.use(cors());
  server.use(bodyParser.json());
  server.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );
  server.use((req, res, next) => {
    res.header('Content-Type', 'application/json; charset=utf-8');
    next();
  });
  return server;
};

module.exports = {
  configureServer,
};
