import * as React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';

const PING = gql`
  {
    ping
  }
`;

export default (): JSX.Element => {
  const { data, error, loading } = useQuery(PING);
  if (loading) {
    return <>Loading...</>;
  }
  if (error) {
    return <>Error!</>;
  }

  return <>{data.ping}</>;
};
