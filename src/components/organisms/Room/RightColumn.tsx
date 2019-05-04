/** @jsx jsx */

import { jsx, css } from '@emotion/core';

import Tab from 'components/organisms/Tab';

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
        { title: 'チャット', component: 'チャット' },
        { title: 'プレイリスト', component: 'プレイリスト' },
      ]}
    />
  </div>
);
