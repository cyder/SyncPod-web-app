import * as React from 'react';

import { historyContext } from '@/components/providers/BrowserHistory';

export interface InternalLinkProps {
  className?: string;
  to: string;
  children?: React.ReactNode;
}

export default ({ className, to, children }: InternalLinkProps) => {
  const history = React.useContext(historyContext);
  const isModifiedEvent = React.useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>): boolean =>
      !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey),
    [],
  );
  const onClick = React.useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (
        !e.defaultPrevented && // onClick prevented default
        e.button === 0 && // ignore everything but left clicks
        !isModifiedEvent(e) // ignore clicks with modifier keys
      ) {
        if (history.location.pathname !== to) {
          history.push(to);
        }
        e.preventDefault();
      }
    },
    [to],
  );
  return (
    <a href={to} onClick={onClick} className={className}>
      {children}
    </a>
  );
};
