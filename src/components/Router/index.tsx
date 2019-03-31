import * as React from 'react';
import { Location } from 'history';

import routes from 'components/Router/config';
import { historyContext } from 'components/providers/BrowserHistory';

export default (): JSX.Element | null => {
  const history = React.useContext(historyContext);

  const selectComponent = React.useCallback(
    (currentPath: string): JSX.Element | null => {
      const components = routes.map(route => {
        const params = route.execRegexp(currentPath);
        if (params) {
          return route.generateComponent(params);
        }
        return null;
      }).find(x => !!x);

      if (components) {
        return components;
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
