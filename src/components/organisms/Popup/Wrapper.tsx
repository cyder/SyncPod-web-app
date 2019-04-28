/** @jsx jsx */
import * as React from 'react';
import { jsx, css } from '@emotion/core';
import { useMutation } from 'react-apollo-hooks';

import Center from 'components/atoms/Layouts/Center';
import FullScreen from 'components/atoms/Layouts/FullScreen';
import SvgIconButton from 'components/atoms/Buttons/SvgIconButton';

import { color, zIndex } from 'constants/styles';
import { clearPopupMutation } from 'queries/popup';
import { ClearPopup } from 'queries/__generated__/ClearPopup';

export interface PropPopups {
  title: string;
  children: React.ReactNode;
}

export default ({ children, title }: PropPopups) => {
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
            position: relative;
            background-color: ${color.WHITE};
            cursor: auto;
            padding: 2rem 4rem;
            border-radius: 1.5rem;
          `}
          onClick={onClickContent}
          role="presentation"
        >
          <h2
            css={css`
              text-align: center;
              font-size: 2rem;
              padding: 1rem 0.5rem;
            `}
          >
            {title}
          </h2>
          {children}
          <SvgIconButton
            css={css`
              width: 2rem;
              height: 2rem;
              position: absolute;
              top: 2rem;
              right: 2rem;
            `}
            icon="close"
            alt="閉じる"
            onClick={onClickBack}
          />
        </div>
      </Center>
    </FullScreen>
  );
};
