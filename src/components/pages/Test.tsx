import * as React from 'react';

import { PopupContext } from 'components/providers/Context';

export default () => {
  const popupContext = React.useContext(PopupContext);

  return (
    <>
      <button type="button" onClick={popupContext.showLogin}>
        login
      </button>
      <button type="button" onClick={popupContext.showSignup}>
        signup
      </button>
    </>
  );
};
