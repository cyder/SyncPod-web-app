import { useCallback } from 'react';
import { useMutation } from 'react-apollo-hooks';

import { clearPopupMutation } from 'queries/popup';
import { ClearPopup } from 'queries/__generated__/ClearPopup';

// eslint-disable-next-line import/prefer-default-export
export const useClearPopup = (): (() => void) => {
  const clearPopup = useMutation<ClearPopup>(clearPopupMutation);
  return useCallback(() => {
    clearPopup();
  }, []);
};
