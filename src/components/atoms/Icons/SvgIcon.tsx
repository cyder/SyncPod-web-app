/** @jsx jsx */

import { css, jsx } from '@emotion/core';

export type Icon =
  | 'logo'
  | 'logoColor'
  | 'close'
  | 'warning'
  | 'icon'
  | 'appStore'
  | 'googlePlay'
  | 'spImage'
  | 'appInfo'
  | 'share'
  | 'cyder'
  | 'plus'
  | 'hint'
  | 'openFullscreen'
  | 'closeFullscreen'
  | 'speaker'
  | 'speakerMute'
  | 'notFound';

const icons: Record<Icon, string> = {
  logo: '/svg/logo.svg',
  logoColor: '/svg/logo-color.svg',
  close: '/svg/close.svg',
  warning: '/svg/warning.svg',
  icon: '/svg/icon.svg',
  appStore: '/svg/app-store.svg',
  googlePlay: '/svg/google-play.svg',
  spImage: '/svg/sp-image.svg',
  appInfo: '/svg/app-info.svg',
  share: '/svg/share.svg',
  cyder: '/svg/cyder.svg',
  plus: '/svg/plus.svg',
  hint: '/svg/hint.svg',
  openFullscreen: '/svg/open-fullscreen.svg',
  closeFullscreen: '/svg/close-fullscreen.svg',
  speaker: '/svg/speaker.svg',
  speakerMute: '/svg/speaker-mute.svg',
  notFound: '/svg/not-found.svg',
};

interface Props {
  className?: string;
  icon: Icon;
  alt?: string;
}

export default ({ icon, className, alt }: Props) => (
  <img
    className={className}
    css={css`
      object-fit: contain;
    `}
    src={icons[icon]}
    alt={alt || 'アイコン'}
    draggable={false}
  />
);
