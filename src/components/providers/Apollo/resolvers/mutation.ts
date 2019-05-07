import { InMemoryCache } from 'apollo-cache-inmemory';

import { getCurrentPopupQuery } from '@/queries/popup';
import currentUser from "@/queries/own-user";
import { PopupType } from '@/__generated__/globalTypes';
import { CurrentPopup } from '@/queries/__generated__/CurrentPopup';
import {OwnUser} from "@/queries/__generated__/OwnUser";

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
  logout: (
    _: {},
    __: {},
    { cache }: { cache: InMemoryCache },
  ): OwnUser => {
    const data: OwnUser = { ownUser: null };
    cache.writeQuery<OwnUser>({ query: currentUser, data });
    return data;
  }
};
