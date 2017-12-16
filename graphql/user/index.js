import { graphql } from 'react-apollo';
import getUsersGraphQL from './getUsers';

const getUsersQuery = graphql(getUsersGraphQL);

export { getUsersQuery };
