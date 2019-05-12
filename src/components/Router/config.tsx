import * as React from 'react';

import Route from '@/components/Router/route';
import NotFound from '@/components/pages/NotFound';
import Room from '@/components/pages/Room';
import Test from '@/components/pages/Test';
import Top from '@/components/pages/Top';

export const topRoute = new Route('/', () => <Top />);
export const roomRoute = new Route(
  '/room/:roomKey',
  (params: { roomKey: string }) => <Room roomKey={params.roomKey} />,
);
export const testRoute = new Route('/test', () => <Test />); // TODO: 削除
export const notFoundRoute = new Route(/.*/, () => <NotFound />);

// 注意: この配列の順番にルーティングの検索が行われる。
export default [topRoute, roomRoute, testRoute, notFoundRoute];
