const axios = require('axios');
const dotevn = require('dotenv');

dotevn.config();

const providerURL = `http://localhost:${process.env.PORT}`;

const getCreditCardNo = async () => {
  const userPayload = await getUserByName('Joe');
  return userPayload.data.creditCardNo;
};

const offerDiscountToActiveUsers = async () => {
  const userPayload = await getActiveUsers();

  // ...
  const userIds = userPayload.data.map((user) => user.id);
  console.log(userIds);
  return userIds;
};

const getUserByName = async (name) => {
  userByNameEndpoint = `${providerURL}/users/user/${name}`;

  const resp = await axios
    .get(userByNameEndpoint)
    .then((res) => {
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
      return res;
    })
    .catch((err) => {
      return err.res;
    });

  return resp;
};

module.exports = {
  getCreditCardNo,
  offerDiscountToActiveUsers,
};
