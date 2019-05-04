/** @jsx jsx */

import { jsx, css } from '@emotion/core';

import Tab from 'components/organisms/Tab';
import Chat from 'components/organisms/Chat';
import PlayList from 'components/organisms/PlayList';

interface Props {
  className?: string;
  isEditing: boolean;
  setIsEditing(flag: boolean): void;
}

export default ({ className, isEditing, setIsEditing }: Props) => (
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
        {
          title: 'プレイリスト',
          component: (
            <PlayList isEditing={isEditing} setIsEditing={setIsEditing} />
          ),
        },
      ]}
    />
  </div>
);
