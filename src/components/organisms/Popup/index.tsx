import * as React from 'react';

import { PopupContext, PopupType } from 'components/providers/Context/popup';
import Wrapper from 'components/organisms/Popup/Wrapper';
import Login from 'components/organisms/Popup/Login';
import Signup from 'components/organisms/Popup/Signup';

export default () => {
  const popupContext = React.useContext(PopupContext);
  const selectComponent = React.useCallback(
    (type?: PopupType): React.ReactNode => {
      switch (type) {
        case 'LOGIN':
          return <Login />;
        case 'SIGNUP':
          return <Signup />;
        default:
          return null;
      }
    },
    [],
  );
  const component = selectComponent(popupContext.current);

  if (!component) {
    return null;
  }

  return <Wrapper>{component}</Wrapper>;
};
