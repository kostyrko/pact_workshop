const axios = require('axios');
const dotevn = require('dotenv');
const express = require('express');
const { configureServer } = require('./helpers');
const randomstring = require('randomstring');

dotevn.config();
const serverRaw = express();
const server = configureServer(serverRaw);

const providerURL = `http://localhost:${process.env.PROVIDER_PORT}`;

const getUserByName = async (name) => {
  userByNameEndpoint = `${providerURL}/users/user/${name}`;
  const resp = await axios
    .get(userByNameEndpoint)
    .then((res) => {
      console.log('\nCalling Users Service');
      console.log(`GET /users/user/${name}`);
      console.log('Received response:');
      console.log(res.data);
      return res;
    })
    .catch((err) => {
      return err.res;
    });

  return resp;
};

const getActiveUsers = async () => {
  usersEndpoint = `${providerURL}/users/active`;
  const resp = await axios
    .get(usersEndpoint)
    .then((res) => {
      console.log('\nCalling Users Service');
      console.log('GET Called /users/active');
      console.log('Received response:');
      console.log(res.data);
      return res;
    })
    .catch((err) => {
      return err.res;
    });

  return resp;
};

server.get('/creditCardNo', async (req, res) => {
  /*
  To get a user's credit card number, it's necessary to call 
  users service.
  */
  const userPayload = await getUserByName('Joe');
  const creditCardNo = userPayload.data.creditCardNo;
  res.end(JSON.stringify({ credictCardNo: creditCardNo }));
});

server.get('/promoCodes', async (req, res) => {
  /*
  To attach a promo code to a user, it's necessary to 
  call users service and get only active users.
  */

  const userPayload = await getActiveUsers();
  const data = userPayload.data.map((user) => {
    return {
      userID: user.id,
      promoCode: randomstring.generate(),
    };
  });

  res.end(JSON.stringify(data));
});

server.get('/health', async (req, res) => {
  res.end('Success');
});

module.exports = {
  server,
};
