const { server } = require('./app');

server.listen(8081, () => {
  console.log('Client Service running on http://localhost:8081');
});
