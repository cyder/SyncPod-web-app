import * as React from 'react';

import Head from '@/components/atoms/Heads/Head';
import Room from '@/components/organisms/Room';

interface Props {
  roomKey: string;
}

export default ({ roomKey }: Props) => (
  <div>
    <Head pageTitle="ルーム名" pageDescription="【ルーム名】ルーム説明" />
    <Room roomKey={roomKey} />
  </div>
);
