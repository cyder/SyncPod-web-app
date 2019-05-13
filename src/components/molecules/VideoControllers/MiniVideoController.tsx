/** @jsx jsx */

import { css, jsx } from '@emotion/core';
import { useCallback, useContext } from 'react';

import SvgIconButton from '@/components/atoms/Buttons/SvgIconButton';
import Center from '@/components/atoms/Layouts/Center';
import SpeakerButton from '@/components/molecules/Buttons/SpeakerButton';
import { editingContet } from '@/components/organisms/Room/Provider';
import { color } from '@/constants/styles';

interface Props {
  className?: string;
}

export default ({ className }: Props) => {
  const { setIsEditing } = useContext(editingContet);
  const handleExpandButton = useCallback(() => {
    setIsEditing(false);
  }, []);

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
      <SvgIconButton
        onClick={handleExpandButton}
        css={buttonStyle}
        icon="openFullscreen"
      />
    </Center>
  );
};
