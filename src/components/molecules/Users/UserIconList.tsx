/** @jsx jsx */

import { jsx, css } from '@emotion/core';

import UserIcon, { User } from 'components/atoms/Users/UserIcon';
import Slider from 'components/atoms/Sliders/Slider';

interface Props {
  users: User[];
}

export default ({ users }: Props) => (
  <Slider>
    <div
      css={css`
        display: flex;
      `}
    >
      {users.map(user => (
        <UserIcon
          css={css`
            :not(:last-child) {
              margin-right: 1.2rem;
            }
          `}
          key={user.id}
          {...user}
        />
      ))}
    </div>
  </Slider>
);
