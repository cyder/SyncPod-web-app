import * as pathToRegexp from 'path-to-regexp';
import * as React from 'react';

import Top from 'components/pages/Top';
import Room from 'components/pages/Room';

interface Route<T = undefined> {
  path: pathToRegexp.Path;
  navigate(params: T): string;
  component(currentPath: string): JSX.Element;
}

const topPath = '/';
export const topRoute: Route = {
  path: topPath,
  navigate: () => '/',
  component: () => <Top />,
};

const roomPath = '/room/:roomKey';
export const roomRoute: Route<{ roomKey: string }> = {
  path: roomPath,
  navigate: (params: { roomKey: string }) => `/room/${params.roomKey}`,
  component: (currentPath: string) => {
    const results = pathToRegexp(roomPath).exec(currentPath);
    const roomKey = results && results.length > 1 ? results[1] : undefined;
    return <Room roomKey={roomKey} />;
  },
};

export default [topRoute, roomRoute];
