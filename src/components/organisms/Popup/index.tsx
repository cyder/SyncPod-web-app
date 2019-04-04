import * as React from 'react';

import { PopupContext, PopupType } from 'components/providers/Context/popup';

export default () => {
  const popupContext = React.useContext(PopupContext);
  const selectComponent = React.useCallback(
    (type: PopupType): JSX.Element | null => {
      switch (type) {
        case 'LOGIN':
          return <>login</>;
        case 'SIGNUP':
          return <>signup</>;
        default:
          return null;
      }
    },
    [],
  );

  const component =
    popupContext.current && selectComponent(popupContext.current);

  if (!component) {
    return null;
  }
  return <div>{component}</div>;
};
