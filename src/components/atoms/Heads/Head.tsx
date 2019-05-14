import * as React from 'react';
import { Helmet } from 'react-helmet';

import { historyContext } from '@/components/providers/BrowserHistory';
import strings from '@/constants/strings';

interface Props {
  pageTitle?: string;
  pageDescription?: string;
}

export default ({ pageTitle, pageDescription }: Props) => {
  const history = React.useContext(historyContext);

  const title = pageTitle
    ? `${pageTitle} - ${strings.APP_TITLE}`
    : `${strings.APP_TITLE} | ${strings.APP_SUB_TITLE}`;
  const description = pageDescription
    ? `${pageDescription} 【SyncPodとは？】${strings.APP_DESCRIPTION}`
    : strings.APP_DESCRIPTION;
  const url = `${strings.DOMAIN}${history.location.pathname}`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};
