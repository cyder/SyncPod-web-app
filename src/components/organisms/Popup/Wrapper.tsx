/** @jsx jsx */
import * as React from 'react';
import { jsx, css } from '@emotion/core';
import { useMutation } from 'react-apollo-hooks';

import Center from 'components/atoms/Layouts/Center';
import FullScreen from 'components/atoms/Layouts/FullScreen';

import { color, zIndex } from 'constants/styles';
import { clearPopupMutation } from 'queries/popup';
import { ClearPopup } from 'queries/__generated__/ClearPopup';

export default ({ children }: { children: React.ReactNode }) => {
  const clearPopup = useMutation<ClearPopup>(clearPopupMutation);
  const onClickBack = React.useCallback(() => {
    clearPopup();
  }, []);
  const onClickContent = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
    },
    [],
  );
  return (
    <FullScreen
      css={css`
        background-color: ${color.POPUP_BACKGROUND};
        cursor: pointer;
        z-index: ${zIndex.POPUP};
      `}
      onClick={onClickBack}
      role="presentation"
    >
      <Center>
        <div
          css={css`
            background-color: ${color.WHITE};
            cursor: auto;
          `}
          onClick={onClickContent}
          role="presentation"
        >
          {children}
        </div>
      </Center>
    </FullScreen>
  );
};
