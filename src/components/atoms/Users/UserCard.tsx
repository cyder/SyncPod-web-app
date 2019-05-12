/** @jsx jsx */

import { css, jsx } from '@emotion/core';
import { useQuery } from 'react-apollo-hooks';

import FilledButton from '@/components/atoms/Buttons/FilledButton';
import UserIcon, { User } from '@/components/atoms/Users/UserIcon';
import { color } from '@/constants/styles';
import { OwnUser } from '@/queries/__generated__/OwnUser';
import GetOwnUser from '@/queries/own-user';

export interface UserData extends User {
  selfIntroduction?: string;
  isOnline?: boolean;
}

interface Props extends UserData {
  className?: string;
}

export default ({
  className,
  id,
  name,
  selfIntroduction,
  isOnline,
  icon,
}: Props) => {
  const { data } = useQuery<OwnUser>(GetOwnUser);
  const iwOwn = data && data.ownUser && data.ownUser.id === id;

  return (
    <div
      css={css`
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
      `}
      className={className}
    >
      <UserIcon
        id={id}
        name={name}
        icon={icon}
        size="6rem"
        className={undefined}
      />
      <h3
        css={css`
          font-size: 1.4rem;
          padding: 1rem 0 0;
          font-weight: bold;
        `}
      >
        {name}
      </h3>
      {selfIntroduction && (
        <p
          css={css`
            padding: 1rem 0 0;
            font-size: 1.2rem;
            line-height: 1.6rem;
          `}
        >
          {selfIntroduction}
        </p>
      )}
      {iwOwn === false && isOnline && (
        <FilledButton
          css={css`
            margin-top: 1.5rem;
            font-size: 1.2rem;
            background: ${color.GRAY_DARK};
            color: ${color.WHITE};
          `}
        >
          強制退出
        </FilledButton>
      )}
    </div>
  );
};
