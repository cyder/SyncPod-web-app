/** @jsx jsx */
import * as React from 'react';
import { jsx, css } from '@emotion/core';

import { PopupContext } from 'components/providers/Context/popup';
import Center from 'components/atoms/Layouts/Center';
import FullScreen from 'components/atoms/Layouts/FullScreen';

import { color, zIndex } from 'constants/styles';

export default ({ children }: { children: React.ReactNode }) => {
  const popupContext = React.useContext(PopupContext);
  const onClickBack = React.useCallback(() => {
    popupContext.close();
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
