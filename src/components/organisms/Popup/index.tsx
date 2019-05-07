import * as React from 'react';
import { useQuery } from 'react-apollo-hooks';

import Wrapper, { PopupProps } from 'components/organisms/Popup/Wrapper';
import Login from 'components/organisms/Popup/Login';
import Signup from 'components/organisms/Popup/Signup';
import JoinRoom from 'components/organisms/Popup/JoinRoom';
import CreateRoom from 'components/organisms/Popup/CreateRoom';

import { getCurrentPopupQuery } from 'queries/popup';
import { PopupType } from '__generated__/globalTypes';
import { CurrentPopup } from 'queries/__generated__/CurrentPopup';

export default () => {
  const { data } = useQuery<CurrentPopup>(getCurrentPopupQuery);
  const selectPopup = React.useCallback(
    (type: PopupType | null): PopupProps | null => {
      switch (type) {
        case PopupType.LOGIN:
          return { title: 'ログイン', children: <Login /> };
        case PopupType.SIGNUP:
          return { title: 'アカウント作成', children: <Signup /> };
        case PopupType.JOIN_ROOM:
          return { title: 'ルームに参加', children: <JoinRoom /> };
        case PopupType.CREATE_ROOM:
          return { title: 'ルームを作成', children: <CreateRoom /> };
        default:
          return null;
      }
    },
    [],
  );
  const popup = data && selectPopup(data.currentPopup);

  if (!popup) {
    return null;
  }

  return <Wrapper {...popup} />;
};
