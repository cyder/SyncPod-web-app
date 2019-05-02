import * as React from 'react';

interface Props {
  onHoverChange(isHover: boolean): void;
  children?: React.ReactNode;
}

export default ({ onHoverChange, children }: Props) => {
  const handleMouseEnter = React.useCallback(() => {
    onHoverChange(true);
  }, []);
  const handleMouseLeave = React.useCallback(() => {
    onHoverChange(false);
  }, []);
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
    </div>
  );
};
