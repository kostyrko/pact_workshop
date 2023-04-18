const express = require('express');
const { users, configureServer } = require('./helpers');

const serverRaw = express();
const server = configureServer(serverRaw);

server.get('/users/user/:name', (req, res) => {
  console.log(`\nReceived request to /users/user/${req.params.name}`);
  console.log('Preparing response...');

  const response = users.find((obj) => obj.name === req.params.name);
  if (response) {
    res.end(JSON.stringify(response));
    console.log('Responding with:');
    console.log(response);
  } else {
    res.status(400);
    res.send({ message: 'User not found!' });
    res.end();
  }
});

server.get('/users/active', (req, res) => {
  console.log('\nReceived request to /users/active');
  console.log('Preparing response...');

  const response = users.filter((obj) => {
    return obj.status === 'Active';
  });
  console.log('Responding with:');
  console.log(response);
  res.json(response);
});

server.get('/health', async (req, res) => {
  res.end('Success');
});

module.exports = {
  server,
};
