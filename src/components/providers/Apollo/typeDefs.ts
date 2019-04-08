import gql from 'graphql-tag';

export default gql`
  extend type Query {
    currentPopup: String
  }

  extend type Mutation {
    showLoginPopup: String
    showSignupPopup: String
    clearPopup: String
  }
`;
