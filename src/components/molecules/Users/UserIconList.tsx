/** @jsx jsx */

import { css, jsx } from '@emotion/core';

import UserIcon, { User } from '@/components/atoms/Users/UserIcon';
import Slider from '@/components/molecules/Sliders/Slider';

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
          size="5rem"
          css={css`
            flex: 0 0 5rem;
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

export { User };
