import gql from 'graphql-tag';

export default gql`
query getUsers {
  users {
    id
    firstName
    lastName
    email
  }
}
`;
