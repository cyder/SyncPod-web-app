import { Location } from 'history';
import * as React from 'react';

import routes from '@/components/Router/config';
import { historyContext } from '@/components/providers/BrowserHistory';

export default (): JSX.Element | null => {
  const history = React.useContext(historyContext);

  const selectComponent = React.useCallback(
    (currentPath: string): JSX.Element | null => {
      for (let i = 0; i < routes.length; i += 1) {
        const route = routes[i];
        const result = route.execRegexp(currentPath);
        if (result) {
          return route.generateComponent(result);
        }
      }
      return null;
    },
    [],
  );

  const [component, setComponent] = React.useState<JSX.Element | null>(
    selectComponent(history.location.pathname),
  );

  React.useEffect(() => {
    history.listen((location: Location) => {
      setComponent(selectComponent(location.pathname));
    });
  }, []);

  return component;
};
