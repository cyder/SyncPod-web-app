import * as React from 'react';

import { historyContext } from 'components/providers/BrowserHistory';

interface Props {
  to: string;
  children?: React.ReactNode;
}

export default ({ to, children }: Props) => {
  const history = React.useContext(historyContext);
  const onClick = React.useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      history.push(to);
      e.preventDefault();
    },
    [to],
  );
  return (
    <a href={to} onClick={onClick}>
      {children}
    </a>
  );
};
