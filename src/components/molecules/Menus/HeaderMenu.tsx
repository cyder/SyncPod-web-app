/** @jsx jsx */

import { css, jsx } from '@emotion/core';
import { useMutation, useQuery } from 'react-apollo-hooks';

import HeaderMenuItem from '@/components/atoms/Menus/HeaderMenuItem';
import { OwnUser } from '@/queries/__generated__/OwnUser';
import { ShowCreateRoomPopup } from '@/queries/__generated__/ShowCreateRoomPopup';
import { ShowJoinRoomPopup } from '@/queries/__generated__/ShowJoinRoomPopup';
import { ShowLoginPopup } from '@/queries/__generated__/ShowLoginPopup';
import { ShowSignupPopup } from '@/queries/__generated__/ShowSignupPopup';
import GetOwnUser, {logoutMutation} from 'queries/own-user';
import {
  showCreateRoomMutation,
  showJoinRoomMutation,
  showLoginPopupMutation,
  showSignupPopupMutation
} from 'queries/popup';

export default () => {
  const showLoginPopup = useMutation<ShowLoginPopup>(showLoginPopupMutation);
  const showSignupPopup = useMutation<ShowSignupPopup>(showSignupPopupMutation);
  const showJoinRoomPopup = useMutation<ShowJoinRoomPopup>(
    showJoinRoomMutation,
  );
  const showCreateRoomPopup = useMutation<ShowCreateRoomPopup>(
    showCreateRoomMutation,
  );
  const logout = useMutation<OwnUser>(logoutMutation);
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
        <HeaderMenuItem onClick={() => logout()}>ログアウト</HeaderMenuItem>
      )}
      <HeaderMenuItem onClick={() => showJoinRoomPopup()}>
        ルームに参加する
      </HeaderMenuItem>
      {ownUser && (
        <HeaderMenuItem onClick={() => showCreateRoomPopup()}>
          ルームを作成する
        </HeaderMenuItem>
      )}
    </div>
  );
};
