const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const User = require('./user/userType');
const UserQueries = require('./user/userQueries');

const schema = new GraphQLSchema({
  types: [User],
  query: new GraphQLObjectType({
    name: 'Queries',
    fields: () => ({
      ...UserQueries,
    }),
  }),
});

module.exports = schema;
