import * as React from 'react';
import { useMutation } from 'react-apollo-hooks';

import { ShowLoginPopup } from '@/queries/__generated__/ShowLoginPopup';
import { ShowSignupPopup } from '@/queries/__generated__/ShowSignupPopup';
import {
  showLoginPopupMutation,
  showSignupPopupMutation,
} from '@/queries/popup';

export default () => {
  const showLoginPopup = useMutation<ShowLoginPopup>(showLoginPopupMutation);
  const showSignupPopup = useMutation<ShowSignupPopup>(showSignupPopupMutation);

  return (
    <>
      <button type="button" onClick={() => showLoginPopup()}>
        login
      </button>
      <button type="button" onClick={() => showSignupPopup()}>
        signup
      </button>
    </>
  );
};
