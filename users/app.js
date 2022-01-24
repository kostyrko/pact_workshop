const express = require("express");
const { users, configureServer } = require('./helpers');

const serverRaw = express();
const server = configureServer(serverRaw);

server.get("/users/user/:name", (req, res) => {
    const response = users.find(obj => obj.name === req.params.name);
  if (response) {
    res.end(JSON.stringify(response))
  } else {
    res.status(400);
    res.send({message: 'User not found!'});
    res.end()
  }
});

server.get("/users/active", (req, res) => {
  console.log('TEST');

  const response = users.filter(obj => {
     return obj.status === 'Active'
  });

  res.json(response)
});

module.exports = {
    server
};