import * as React from 'react';
import { useQuery } from 'react-apollo-hooks';

import Wrapper from 'components/organisms/Popup/Wrapper';
import Login from 'components/organisms/Popup/Login';
import Signup from 'components/organisms/Popup/Signup';

import { getCurrentPopupQuery } from 'queries/popup';
import { CurrentPopup } from 'queries/__generated__/CurrentPopup';

export default () => {
  const { data } = useQuery<CurrentPopup>(getCurrentPopupQuery);
  const selectComponent = React.useCallback(
    (type?: string | null): React.ReactNode => {
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
  const component = selectComponent(data && data.currentPopup);

  if (!component) {
    return null;
  }

  return <Wrapper>{component}</Wrapper>;
};
