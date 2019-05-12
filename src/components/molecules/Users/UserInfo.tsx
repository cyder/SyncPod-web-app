/** @jsx jsx */

import { css, jsx } from '@emotion/core';
import { useCallback, useContext, useRef } from 'react';

import BaseButton from '@/components/atoms/Buttons/BaseButton';
import SvgIconButton from '@/components/atoms/Buttons/SvgIconButton';
import MiniOverlay from '@/components/atoms/Overlays/MiniOverlay';
import UserCard, { UserData } from '@/components/atoms/Users/UserCard';
import UserIcon from '@/components/atoms/Users/UserIcon';
import { overlayContext } from '@/components/providers/Overlay';
import { color } from '@/constants/styles';

interface Props extends UserData {
  className?: string;
  size?: string;
}

export default (props: Props) => {
  const iconRef = useRef<HTMLDivElement>(null);
  const setOverlay = useContext(overlayContext);
  const handleCloseButton = useCallback(() => {
    setOverlay(null);
  }, []);
  const handleIconClick = useCallback(() => {
    setOverlay(
      <MiniOverlay
        css={css`
          position: relative;
          border-radius: 1rem;
          border: 2px solid ${color.PRIMALY};
          background: ${color.WHITE};
          margin: 1rem 0;
          width: 18rem;
        `}
        nearRef={iconRef}
        onClickBack={handleCloseButton}
      >
        <UserCard {...props} className={undefined} />
        <SvgIconButton
          css={css`
            position: absolute;
            top: 1rem;
            right: 1rem;
            height: 1.5rem;
            width: 1.5rem;
          `}
          icon="close"
          alt="閉じる"
          onClick={handleCloseButton}
        />
      </MiniOverlay>,
    );
  }, [props]);
  const { className } = props;

  return (
    <div ref={iconRef} className={className}>
      <BaseButton onClick={handleIconClick}>
        <UserIcon {...props} className={undefined} />
      </BaseButton>
    </div>
  );
};

export { UserData };
