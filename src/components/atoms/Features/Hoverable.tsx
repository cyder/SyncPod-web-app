import * as React from 'react';

import BaseButton from 'components/atoms/Buttons/BaseButton';

interface Props {
  onHoverChange(isHover: boolean): void;
  children?: React.ReactNode;
  className?: string;
  onClick?(e: React.MouseEvent<HTMLButtonElement>): void;
}

export default ({ onHoverChange, children, className, onClick }: Props) => {
  const handleMouseEnter = React.useCallback(() => {
    onHoverChange(true);
  }, []);
  const handleMouseLeave = React.useCallback(() => {
    onHoverChange(false);
  }, []);
  return onClick ? (
    <BaseButton
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {children}
    </BaseButton>
  ) : (
    <div
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};
