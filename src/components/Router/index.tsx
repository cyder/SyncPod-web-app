import * as React from 'react';
import { Location } from 'history';

import routes from 'components/Router/config';
import { historyContext } from 'components/providers/BrowserHistory';

export default (): JSX.Element | null => {
  const history = React.useContext(historyContext);
  const [currentPath, setCurrentPath] = React.useState(
    history.location.pathname,
  );

  React.useEffect(() => {
    history.listen((location: Location) => {
      setCurrentPath(location.pathname);
    });
  }, []);

  for (let i = 0; i < routes.length; i += 1) {
    const route = routes[i];
    const result = route.execRegexp(currentPath);
    if (result) {
      return route.generateComponent(result);
    }
  }

  return null;
};
