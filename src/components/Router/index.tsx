import * as React from 'react';
import { Location } from 'history';

import routes from 'components/Router/config';
import { historyContext } from 'components/providers/BrowserHistory';

export default (): JSX.Element | null => {
  const history = React.useContext(historyContext);

  const selectComponent = React.useCallback(
    (currentPath: string): JSX.Element | null => {
      let component = null;
      routes.some(route => {
        const params = route.execRegexp(currentPath);
        if (params) {
          component = route.generateComponent(params);
          return true;
        }
        return false;
      });
      return component;
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
