import gql from 'graphql-tag';

export const getCurrentPopupQuery = gql`
  query CurrentPopup {
    currentPopup @client
  }
`;

export const showLoginPopupMutation = gql`
  mutation ShowLoginPopup {
    showLoginPopup @client
  }
`;

export const showSignupPopupMutation = gql`
  mutation ShowSignupPopup {
    showSignupPopup @client
  }
`;

export const clearPopupMutation = gql`
  mutation ClearPopup {
    clearPopup @client
  }
`;
