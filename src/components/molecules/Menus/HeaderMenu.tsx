/** @jsx jsx */

import { jsx, css } from '@emotion/core';
import { useQuery, useMutation } from 'react-apollo-hooks';

import HeaderMenuItem from 'components/atoms/Menus/HeaderMenuItem';

import {
  showLoginPopupMutation,
  showSignupPopupMutation,
  showJoinRoomMutation,
} from 'queries/popup';
import GetOwnUser from 'queries/own-user';
import { ShowLoginPopup } from 'queries/__generated__/ShowLoginPopup';
import { ShowSignupPopup } from 'queries/__generated__/ShowSignupPopup';
import { ShowJoinRoomPopup } from 'queries/__generated__/ShowJoinRoomPopup';
import { OwnUser } from 'queries/__generated__/OwnUser';

export default () => {
  const showLoginPopup = useMutation<ShowLoginPopup>(showLoginPopupMutation);
  const showSignupPopup = useMutation<ShowSignupPopup>(showSignupPopupMutation);
  const showJoinRoomPopup = useMutation<ShowJoinRoomPopup>(
    showJoinRoomMutation,
  );
  const { data, loading } = useQuery<OwnUser>(GetOwnUser);
  if (loading) {
    return null;
  }
  const ownUser = data && data.ownUser;

  return (
    <div
      css={css`
        display: flex;
      `}
    >
      {!ownUser && (
        <HeaderMenuItem onClick={() => showSignupPopup()}>
          アカウント作成
        </HeaderMenuItem>
      )}
      {!ownUser && (
        <HeaderMenuItem onClick={() => showLoginPopup()}>
          ログイン
        </HeaderMenuItem>
      )}
      {ownUser && (
        <HeaderMenuItem onClick={() => {}}>{ownUser.name}</HeaderMenuItem>
      )}
      {ownUser && (
        <HeaderMenuItem onClick={() => {}}>ログアウト</HeaderMenuItem>
      )}
      <HeaderMenuItem onClick={() => showJoinRoomPopup()}>
        ルームに参加する
      </HeaderMenuItem>
      {ownUser && (
        <HeaderMenuItem onClick={() => {}}>ルームを作成する</HeaderMenuItem>
      )}
    </div>
  );
};
