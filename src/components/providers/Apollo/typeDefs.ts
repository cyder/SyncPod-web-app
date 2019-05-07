import gql from 'graphql-tag';

export default gql`
  extend type Query {
    currentPopup: PopupType
    ownUser: User
  }

  extend type Mutation {
    showLoginPopup: PopupType
    showSignupPopup: PopupType
    showJoinRoomPopup: PopupType
    showCreateRoomPopup: PopupType
    clearPopup: PopupType
    logout: Boolean
  }

  enum PopupType {
    LOGIN
    SIGNUP
    JOIN_ROOM
    CREATE_ROOM
  }
`;
