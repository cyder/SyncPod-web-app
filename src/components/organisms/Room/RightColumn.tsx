/** @jsx jsx */

import { jsx, css } from '@emotion/core';

import Tab from 'components/organisms/Tab';
import Chat from 'components/organisms/Chat';

interface Props {
  className?: string;
  isEditing: boolean;
  setIsEditing(flag: boolean): void;
}

export default ({ className }: Props) => (
  <div
    className={className}
    css={css`
      padding: 2rem 0;
      display: flex;
      flex-direction: column;
    `}
  >
    <Tab
      tabs={[
        { title: 'チャット', component: <Chat /> },
        { title: 'プレイリスト', component: 'プレイリスト' },
      ]}
    />
  </div>
);
