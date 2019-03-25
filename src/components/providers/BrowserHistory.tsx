import * as React from 'react';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
export const historyContext = React.createContext(history);
interface Props {
  children: React.ReactNode;
}

export default ({ children }: Props): JSX.Element => {
  const { Provider } = historyContext;
  return <Provider value={history}>{children}</Provider>;
};
