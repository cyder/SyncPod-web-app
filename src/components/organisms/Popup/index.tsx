/** @jsx jsx */
import * as React from 'react';
import { jsx, css } from '@emotion/core';

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

  return (
    <div
      css={css`
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.5);
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
      `}
      onClick={popupContext.close}
      onKeyDown={() => {}}
      role="presentation"
    >
      <div
        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
        onKeyDown={() => {}}
        role="presentation"
        css={css`
          background-color: #ffffff;
          cursor: auto;
        `}
      >
        {component}
      </div>
    </div>
  );
};
