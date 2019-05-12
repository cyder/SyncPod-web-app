/** @jsx jsx */

import { css, jsx } from '@emotion/core';

import ProgressiveBar from '@/components/atoms/Bars/ProgressiveBar';
import FullscreenButton from '@/components/molecules/Buttons/FullscreenButton';
import SpeakerButton from '@/components/molecules/Buttons/SpeakerButton';
import { color } from '@/constants/styles';

interface Props {
  className?: string;
  isFullscreen: boolean;
  onFullscreenButtonClick(): void;
}

export default ({
  className,
  isFullscreen,
  onFullscreenButtonClick,
}: Props) => {
  const buttonStyle = css`
    padding: 0.2rem 0.7rem;
    height: 2.4rem;
    width: 3.4rem;
  `;

  return (
    <div
      css={css`
        background: ${color.VIDEO_CONTROLLER_BACKGROUND};
        padding: 6rem 3% 0;
      `}
      className={className}
    >
      <ProgressiveBar
        css={css`
          margin: 1rem 0;
        `}
        progress={10}
      />
      <div
        css={css`
          display: flex;
          justify-content: flex-end;
          margin: 1rem 0;
        `}
      >
        <SpeakerButton css={buttonStyle} />
        <FullscreenButton
          css={buttonStyle}
          isFullscreen={isFullscreen}
          onClick={onFullscreenButtonClick}
        />
      </div>
    </div>
  );
};
