import * as pathToRegexp from 'path-to-regexp';
import * as React from 'react';
import { Location } from 'history';

import routes from 'components/Router/routes';
import NotFound from 'components/pages/NotFound';
import { historyContext } from 'components/providers/BrowserHistory';

export default (): JSX.Element => {
  const history = React.useContext(historyContext);
  const [currentPath, setCurrentPath] = React.useState(history.location.pathname);
  React.useEffect(() => {
    history.listen((location: Location) => {
      setCurrentPath(location.pathname);
    });
  }, []);
  const currentRoute = routes.find((route: { path: pathToRegexp.Path }) => {
    const result = pathToRegexp(route.path).exec(currentPath);
    return !!result;
  });

  if (!currentRoute) {
    return <NotFound />;
  }
  return currentRoute.component(currentPath);
};
