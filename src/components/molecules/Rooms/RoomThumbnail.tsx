/** @jsx jsx */

import { jsx, css } from '@emotion/core';

import LazyLoadImage from 'components/atoms/Images/LazyLoadImage';
import AspectRatio from 'components/atoms/Layouts/AspectRatio';
import SvgIcon from 'components/atoms/Icons/SvgIcon';
import Center from 'components/atoms/Layouts/Center';

import { color } from 'constants/styles';

interface Video {
  title: string;
  thumbnailUrl: string;
}

interface Props {
  nowPlayingVideo?: Video;
  lastPlayingVideo?: Video;
  className?: string;
  isHover?: boolean;
}

export default ({
  nowPlayingVideo,
  lastPlayingVideo,
  isHover,
  className,
}: Props) => {
  const video = nowPlayingVideo || lastPlayingVideo;
  return (
    <AspectRatio className={className} width={16} height={9}>
      <div
        css={css`
          border-radius: 0.8rem;
          width: 100%;
          height: 100%;
          background-color: ${color.GRAY_LIGHT};
          overflow: hidden;
        `}
      >
        <div
          css={css`
            width: 100%;
            height: 100%;
            transform: scale(${isHover ? '1.2' : '1.0'});
            transition: transform 300ms ease;
          `}
        >
          {video ? (
            <LazyLoadImage
              css={css`
                object-fit: cover;
                width: 100%;
                height: 100%;
              `}
              src={video.thumbnailUrl}
              alt={video.title}
            />
          ) : (
            <Center>
              <SvgIcon
                css={css`
                  width: 25%;
                `}
                icon="icon"
              />
            </Center>
          )}
        </div>
      </div>
    </AspectRatio>
  );
};
