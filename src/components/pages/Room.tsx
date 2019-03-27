import * as React from 'react';

interface Props {
  roomKey: string;
}

export default ({ roomKey }: Props) => (
  <>
    roomKey:
    {roomKey}
  </>
);
