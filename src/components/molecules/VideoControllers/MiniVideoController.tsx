/** @jsx jsx */

import { jsx, css } from '@emotion/core';

import SpeakerButton from 'components/molecules/Buttons/SpeakerButton';
import SvgIconButton from 'components/atoms/Buttons/SvgIconButton';

import { color } from 'constants/styles';
import Center from 'components/atoms/Layouts/Center';

interface Props {
  className?: string;
}

export default ({ className }: Props) => {
  const buttonStyle = css`
    padding: 2.5rem;
    height: 8rem;
    width: 8rem;
  `;

  return (
    <Center
      css={css`
        background: ${color.TRANSPARENT_GRAY_MEDIUM};
      `}
      className={className}
    >
      <SpeakerButton css={buttonStyle} />
      <SvgIconButton css={buttonStyle} icon="openFullscreen" />
    </Center>
  );
};
