import * as React from 'react';
import { useQuery } from 'react-apollo-hooks';

import PING from 'queries/ping';
import { ping as PING_TYPE } from 'queries/__generated__/ping';

export default (): JSX.Element => {
  const { data, error, loading } = useQuery<PING_TYPE>(PING);
  if (loading) {
    return <>Loading...</>;
  }
  if (error) {
    return <>Error!</>;
  }

  return <>{data && data.ping}</>;
};
