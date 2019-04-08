import gql from 'graphql-tag';

export default gql`
  extend type Query {
    currentPopup: PopupType
  }

  extend type Mutation {
    showLoginPopup: PopupType
    showSignupPopup: PopupType
    clearPopup: PopupType
  }

  enum PopupType {
    LOGIN
    SIGNUP
  }
`;
