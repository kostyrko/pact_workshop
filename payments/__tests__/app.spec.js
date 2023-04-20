const dotevn = require('dotenv');
const { server } = require('../src/app');
const supertest = require('supertest');
const request = supertest(server);

dotevn.config();
jest.setTimeout(30000);

describe('Consumer Service', () => {
  beforeAll(() => provider.setup());
  afterEach(() => provider.verify());
  afterAll(() => provider.finalize());

  describe('GET credit card number', () => {
    const expected_resp = {
      id: 1,
      name: 'Joe',
      age: 29,
      creditCardNo: 4012888888881881,
      status: 'Active',
    };

    beforeEach(() => {
      const interaction = {
        state: 'Provider has a list of users',
        uponReceiving: 'a request for a specific user',
        withRequest: {
          method: 'GET',
          path: '/users/user/Joe',
        },
        willRespondWith: {
          status: 200,
          body: expected_resp,
        },
      };
      return provider.addInteraction(interaction);
    });

    test('get credit card number', async () => {
      const res = await request.get('/creditCardNo');
      expect(res.body.credictCardNo).toEqual(4012888888881881);
    });
  });
});
