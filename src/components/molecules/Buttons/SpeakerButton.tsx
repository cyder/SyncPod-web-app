/** @jsx jsx */

import { useState, useCallback } from 'react';
import { jsx } from '@emotion/core';

import SvgIconButton from 'components/atoms/Buttons/SvgIconButton';

interface Props {
  className?: string;
}

export default ({ className }: Props) => {
  const [muted, setMuted] = useState(false);
  const handleClick = useCallback(() => {
    setMuted(!muted);
  }, [muted]);

  return (
    <SvgIconButton
      icon={muted ? 'speakerMute' : 'speaker'}
      className={className}
      onClick={handleClick}
    />
  );
};
