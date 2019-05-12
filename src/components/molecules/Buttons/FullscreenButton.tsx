/** @jsx jsx */

import { jsx } from '@emotion/core';

import SvgIconButton from '@/components/atoms/Buttons/SvgIconButton';

interface Props {
  className?: string;
  isFullscreen: boolean;
  onClick(): void;
}

export default ({ className, isFullscreen, onClick }: Props) => (
  <SvgIconButton
    icon={isFullscreen ? 'closeFullscreen' : 'openFullscreen'}
    className={className}
    onClick={onClick}
  />
);
