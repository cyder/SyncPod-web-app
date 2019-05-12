/** @jsx jsx */

import { css, jsx } from '@emotion/core';

import ChatInput from '@/components/organisms/Chat/ChatInput';
import ChatList from '@/components/organisms/Chat/ChatList';

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
