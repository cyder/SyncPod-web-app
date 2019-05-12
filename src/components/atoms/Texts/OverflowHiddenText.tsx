/** @jsx jsx */

import { css, jsx } from '@emotion/core';
import { useEffect, useRef, useState } from 'react';

import MultiLineText from '@/components/atoms/Texts/MultiLineText';

interface Props {
  lineHeight: number;
  children: string;
  className?: string;
}

/**
 * はみ出した行を非表示にするコンポーネント
 * リサイズ時の再計算はしていない
 */
export default ({ lineHeight, children, className }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<string>();

  useEffect(() => {
    if (ref.current) {
      const num = Math.floor(ref.current.clientHeight / lineHeight);
      setHeight(`${num * lineHeight}px`);
    }
  }, []);

  return (
    <div
      ref={ref}
      css={css`
        overflow: hidden;
        height: ${height || '100%'};
        line-height: ${lineHeight}px;
        opacity: ${height ? 1 : 0};
      `}
      className={className}
    >
      <MultiLineText>{children}</MultiLineText>
    </div>
  );
};
