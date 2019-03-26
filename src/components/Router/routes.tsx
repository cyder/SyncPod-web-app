import * as React from 'react';

import Top from 'components/pages/Top';
import Room from 'components/pages/Room';
import { Route } from 'components/Router/helper';

export const topRoute: Route = {
  regexPath: '/',
  generatePath: () => '/',
  component: () => <Top />,
};

interface RoomParams {
  roomKey: string;
}

export const roomRoute: Route<RoomParams> = {
  regexPath: '/room/:roomKey',
  generatePath: (params: RoomParams) => `/room/${params.roomKey}`,
  component: (params: Partial<RoomParams> | null) => {
    const roomKey = params && params.roomKey;
    return <Room roomKey={roomKey} />;
  },
};

// 注意: この配列の順番にルーティングの検索が行われる。
export default [topRoute, roomRoute];
