/** @jsx jsx */

import { jsx, css } from '@emotion/core';

import ChatList from 'components/organisms/Chat/ChatList';
import ChatInput from 'components/organisms/Chat/ChatInput';

interface Props {
  className?: string;
}

export default ({ className }: Props) => (
  <div
    className={className}
    css={css`
      display: flex;
      flex-direction: column;
      height: 100%;
    `}
  >
    <ChatList
      css={css`
        flex: 1 1 0;
        margin-bottom: 1rem;
      `}
    />
    <ChatInput />
  </div>
);
