import * as React from 'react';

interface Props {
  roomKey?: string | null | undefined;
}

export default ({ roomKey }: Props) => (
  <>
    roomKey:
    {roomKey}
  </>
);
