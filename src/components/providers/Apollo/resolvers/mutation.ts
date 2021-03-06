import { InMemoryCache } from 'apollo-cache-inmemory';

import { PopupType, Unit } from '@/__generated__/globalTypes';
import { CurrentPopup } from '@/queries/__generated__/CurrentPopup';
import { OwnUser } from '@/queries/__generated__/OwnUser';
import getOwnUserQuery from '@/queries/own-user';
import { getCurrentPopupQuery } from '@/queries/popup';

export default {
  showLoginPopup: (
    _: {},
    __: {},
    { cache }: { cache: InMemoryCache },
  ): CurrentPopup => {
    const data: CurrentPopup = { currentPopup: PopupType.LOGIN };
    cache.writeQuery<CurrentPopup>({ query: getCurrentPopupQuery, data });
    return data;
  },
  showSignupPopup: (
    _: {},
    __: {},
    { cache }: { cache: InMemoryCache },
  ): CurrentPopup => {
    const data: CurrentPopup = { currentPopup: PopupType.SIGNUP };
    cache.writeQuery<CurrentPopup>({ query: getCurrentPopupQuery, data });
    return data;
  },
  showJoinRoomPopup: (
    _: {},
    __: {},
    { cache }: { cache: InMemoryCache },
  ): CurrentPopup => {
    const data: CurrentPopup = { currentPopup: PopupType.JOIN_ROOM };
    cache.writeQuery<CurrentPopup>({ query: getCurrentPopupQuery, data });
    return data;
  },
  showCreateRoomPopup: (
    _: {},
    __: {},
    { cache }: { cache: InMemoryCache },
  ): CurrentPopup => {
    const data: CurrentPopup = { currentPopup: PopupType.CREATE_ROOM };
    cache.writeQuery<CurrentPopup>({ query: getCurrentPopupQuery, data });
    return data;
  },
  clearPopup: (
    _: {},
    __: {},
    { cache }: { cache: InMemoryCache },
  ): CurrentPopup => {
    const data: CurrentPopup = { currentPopup: null };
    cache.writeQuery<CurrentPopup>({ query: getCurrentPopupQuery, data });
    return data;
  },
  logout: (_: {}, __: {}, { cache }: { cache: InMemoryCache }): Unit => {
    const data: OwnUser = { ownUser: null };
    cache.writeQuery<OwnUser>({ query: getOwnUserQuery, data });
    return Unit.UNIT;
  },
};
