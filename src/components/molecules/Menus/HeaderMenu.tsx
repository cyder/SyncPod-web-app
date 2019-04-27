/** @jsx jsx */

import { jsx, css } from '@emotion/core';
import { useMutation } from 'react-apollo-hooks';

import HeaderMenuItem from 'components/atoms/Menus/HeaderMenuItem';

import {
  showLoginPopupMutation,
  showSignupPopupMutation,
  showJoinRoomMutation,
} from 'queries/popup';
import { ShowLoginPopup } from 'queries/__generated__/ShowLoginPopup';
import { ShowSignupPopup } from 'queries/__generated__/ShowSignupPopup';
import { ShowJoinRoomPopup } from 'queries/__generated__/ShowJoinRoomPopup';

export default () => {
  const showLoginPopup = useMutation<ShowLoginPopup>(showLoginPopupMutation);
  const showSignupPopup = useMutation<ShowSignupPopup>(showSignupPopupMutation);
  const showJoinRoomPopup = useMutation<ShowJoinRoomPopup>(
    showJoinRoomMutation,
  );

  return (
    <div
      css={css`
        display: flex;
      `}
    >
      <HeaderMenuItem onClick={() => showSignupPopup()}>
        アカウント作成
      </HeaderMenuItem>
      <HeaderMenuItem onClick={() => showLoginPopup()}>ログイン</HeaderMenuItem>
      <HeaderMenuItem onClick={() => showJoinRoomPopup()}>
        ルームに参加する
      </HeaderMenuItem>
    </div>
  );
};
