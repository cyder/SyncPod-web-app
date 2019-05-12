/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';

import { zIndex } from '@/constants/styles';

interface Props {
  children: React.ReactNode;
}

export const overlayContext = React.createContext<
  (content: React.ReactNode) => void
>(() => {});

export default ({ children }: Props) => {
  const [content, setContent] = React.useState<React.ReactNode>();
  const { Provider } = overlayContext;
  return (
    <Provider value={setContent}>
      {children}
      {content && (
        <div
          css={css`
            position: fixed;
            z-index: ${zIndex.POPUP};
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100vw;
            height: 100vh;
          `}
        >
          {content}
        </div>
      )}
    </Provider>
  );
};
