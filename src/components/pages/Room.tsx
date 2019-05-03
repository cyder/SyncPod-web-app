import * as React from 'react';

import Room from 'components/organisms/Room';

interface Props {
  roomKey: string;
}

export default ({ roomKey }: Props) => <Room roomKey={roomKey} />;
