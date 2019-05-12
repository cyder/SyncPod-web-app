/** @jsx jsx */

import { css, jsx } from '@emotion/core';

import ShortDate from '@/components/atoms/Date/ShortDate';
import UserInfo, { UserData } from '@/components/molecules/Users/UserInfo';
import { color } from '@/constants/styles';

export interface ChatData {
  id: string;
  user: UserData;
  text: string;
  createdAt: Date;
}

interface Props extends ChatData {
  className?: string;
}

export default ({ className, user, text, createdAt }: Props) => (
  <div
    className={className}
    css={css`
      display: flex;
      align-items: flex-start;
      padding: 0.5rem 0;
    `}
  >
    <UserInfo {...user} size="3rem" />
    <div
      css={css`
        flex: 1;
        margin-left: 0.8rem;
      `}
    >
      <ShortDate>{createdAt}</ShortDate>
      <div
        css={css`
          font-size: 1.4rem;
          line-height: 1.8rem;
          padding: 0.3rem 0;
        `}
      >
        <span
          css={css`
            color: ${color.GRAY_MEDIUM};
            margin-right: 0.5rem;
          `}
        >
          {user.name}
        </span>
        <span>{text}</span>
      </div>
    </div>
  </div>
);

export { UserData };
