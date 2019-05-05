/** @jsx jsx */

import { jsx, css } from '@emotion/core';

import SvgIcon, { Icon } from 'components/atoms/Icons/SvgIcon';
import ExternalLink from 'components/atoms/Links/ExternalLink';

type App = 'ios' | 'android';

interface AppData {
  icon: Icon;
  url: string;
  alt: string;
}

const apps: Record<App, AppData> = {
  ios: {
    icon: 'appStore',
    url: 'https://itunes.apple.com/jp/app/syncpod/id1347783355',
    alt: 'App Store',
  },
  android: {
    icon: 'googlePlay',
    url:
      'https://play.google.com/store/apps/details?id=com.cyder.android.syncpod',
    alt: 'Google Play',
  },
};

interface Props {
  app: App;
  className?: string;
}

export default ({ className, app }: Props) => {
  const data = apps[app];

  return (
    <ExternalLink
      css={css`
        display: inline-block;
      `}
      className={className}
      href={data.url}
    >
      <SvgIcon
        css={css`
          height: 100%;
        `}
        alt={data.alt}
        icon={data.icon}
      />
    </ExternalLink>
  );
};
