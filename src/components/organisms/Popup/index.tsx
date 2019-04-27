import * as React from 'react';
import { useQuery } from 'react-apollo-hooks';

import Wrapper from 'components/organisms/Popup/Wrapper';
import Login from 'components/organisms/Popup/Login';
import Signup from 'components/organisms/Popup/Signup';
import JoinRoom from 'components/organisms/Popup/JoinRoom';

import { getCurrentPopupQuery } from 'queries/popup';
import { PopupType } from '__generated__/globalTypes';
import { CurrentPopup } from 'queries/__generated__/CurrentPopup';

export default () => {
  const { data } = useQuery<CurrentPopup>(getCurrentPopupQuery);
  const selectComponent = React.useCallback(
    (type: PopupType | null): React.ReactNode => {
      switch (type) {
        case PopupType.LOGIN:
          return <Login />;
        case PopupType.SIGNUP:
          return <Signup />;
        case PopupType.JOIN_ROOM:
          return <JoinRoom />;
        default:
          return null;
      }
    },
    [],
  );
  const component = data && selectComponent(data.currentPopup);

  if (!component) {
    return null;
  }

  return <Wrapper>{component}</Wrapper>;
};
