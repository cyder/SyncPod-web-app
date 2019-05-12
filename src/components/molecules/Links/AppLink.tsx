/** @jsx jsx */

import { css, jsx } from '@emotion/core';

import SvgIcon, { Icon } from '@/components/atoms/Icons/SvgIcon';
import ExternalLink from '@/components/atoms/Links/ExternalLink';
import links from '@/constants/links';

type App = 'ios' | 'android';

interface AppData {
  icon: Icon;
  url: string;
  alt: string;
}

const apps: Record<App, AppData> = {
  ios: {
    icon: 'appStore',
    url: links.APP_STORE,
    alt: 'App Store',
  },
  android: {
    icon: 'googlePlay',
    url: links.GOOGLE_PLAY,
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
