const { GraphQLObjectType, GraphQLID, GraphQLNonNull, GraphQLString } = require('graphql');
const { GraphQLDateTime } = require('graphql-iso-date');

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    firstName: {
      type: new GraphQLNonNull(GraphQLString),
    },
    lastName: {
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    createdAt: {
      type: new GraphQLNonNull(GraphQLDateTime),
    },
    updatedAt: {
      type: new GraphQLNonNull(GraphQLDateTime),
    },
  }),
});

module.exports = UserType;
