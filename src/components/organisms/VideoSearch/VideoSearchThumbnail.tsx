/** @jsx jsx */

import { jsx, css } from '@emotion/core';

import Card from 'components/atoms/Cards/Card';
import SvgIcon from 'components/atoms/Icons/SvgIcon';
import Center from 'components/atoms/Layouts/Center';
import VideoThumbnail from 'components/molecules/Videos/VideoThumbnail';

import { color } from 'constants/styles';

interface Props {
  title: string;
  thumbnailUrl: string;
  isHover: boolean;
  className?: string;
}

export default ({ className, title, thumbnailUrl, isHover }: Props) => (
  <div
    css={css`
      position: relative;
    `}
    className={className}
  >
    <VideoThumbnail title={title} thumbnailUrl={thumbnailUrl} />
    {isHover && (
      <Card
        css={css`
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          background-color: ${color.PLAYLIST_HOVER_BACKGROUND};
          color: ${color.WHITE};
        `}
      >
        <Center direction="column">
          <SvgIcon
            css={css`
              display: block;
              height: 3rem;
            `}
            icon="plus"
          />
          <div
            css={css`
              text-align: center;
              font-size: 1.4rem;
              padding-top: 1rem;
            `}
          >
            プレイリストに追加
          </div>
        </Center>
      </Card>
    )}
  </div>
);
