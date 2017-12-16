const {
  GraphQLList,
} = require('graphql');
const { internet, name } = require('faker');

const User = require('./userType');

const userQueries = {
  users: {
    type: new GraphQLList(User),
    resolve: async () => {
      const users = await new Promise(resolve =>
        setTimeout(() =>
          resolve(new Array(10).fill(undefined).map((user, i) => ({
            id: i + 1,
            firstName: name.firstName,
            lastName: name.lastName,
            email: internet.email(),
          }))), 100),
      );
      return users;
    },
  },
};

module.exports = userQueries;
