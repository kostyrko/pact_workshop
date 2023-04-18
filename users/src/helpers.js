const cors = require('cors');
const bodyParser = require('body-parser');

const users = [
  {
    id: 1,
    name: 'Joe',
    age: 29,
    creditCardNo: 4012888888881881,
    status: 'Active',
  },
  {
    id: 2,
    name: 'Mary',
    age: 20,
    creditCardNo: 4929196450883554,
    status: 'Active',
  },
  {
    id: 3,
    name: 'Peter',
    age: 55,
    creditCardNo: 6011622246624154,
    status: 'Active',
  },
  {
    id: 4,
    name: 'Helen',
    age: 35,
    creditCardNo: 6011622246624154,
    status: 'Deactivated',
  },
];

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
  users,
  configureServer,
};
