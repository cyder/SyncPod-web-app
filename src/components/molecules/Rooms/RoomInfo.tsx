/** @jsx jsx */

import { css, jsx } from '@emotion/core';

import MultiLineText from '@/components/atoms/Texts/MultiLineText';
import UserIconList from '@/components/molecules/Users/UserIconList';
import UserInfo, { UserData } from '@/components/molecules/Users/UserInfo';
import { color } from '@/constants/styles';

export interface RoomInfoData {
  onlineUsers: UserData[];
  createUser: UserData;
  description: string;
}

interface Props extends RoomInfoData {
  className?: string;
}

export default ({ onlineUsers, createUser, description, className }: Props) => {
  const h3Style = css`
    font-weight: bold;
    font-size: 1.4rem;
    padding: 2rem 0 0.5rem;
  `;
  return (
    <div className={className}>
      <div
        css={css`
          display: flex;
          align-items: baseline;
        `}
      >
        <h3 css={h3Style}>オンラインメンバー</h3>
        <div
          css={css`
            font-size: 1.2rem;
            color: ${color.GRAY_DARK};
            margin-left: 1rem;
          `}
        >
          {`視聴者：${onlineUsers.length}`}
        </div>
      </div>
      <UserIconList users={onlineUsers} />
      <h3 css={h3Style}>ルームオーナー</h3>
      <div
        css={css`
          display: flex;
          align-items: center;
        `}
      >
        <UserInfo {...createUser} />
        <div
          css={css`
            font-size: 1.2rem;
            margin-left: 1rem;
          `}
        >
          {createUser.name}
        </div>
      </div>
      <h3 css={h3Style}>ルームの説明</h3>
      <MultiLineText
        css={css`
          font-size: 1.2rem;
          line-height: 2rem;
          color: ${color.GRAY_DARK};
        `}
      >
        {description}
      </MultiLineText>
    </div>
  );
};
