/** @jsx jsx */

import { useState } from 'react';
import { jsx, css } from '@emotion/core';

import SvgIcon from 'components/atoms/Icons/SvgIcon';
import Hoverable from 'components/atoms/Features/Hoverable';
import MultiLineText from 'components/atoms/Texts/MultiLineText';

import { color } from 'constants/styles';

interface Props {
  hint: string;
  className?: string;
}

export default ({ hint, className }: Props) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Hoverable
      css={css`
        position: relative;
      `}
      className={className}
      onHoverChange={setIsHover}
    >
      <SvgIcon
        css={css`
          cursor: pointer;
          padding: 0.2rem;
          width: 2rem;
          height: 2rem;
        `}
        icon="hint"
      />
      {isHover && (
        <MultiLineText
          css={css`
            font-size: 1.1rem;
            line-height: 1.8rem;
            background: ${color.BLACK};
            position: absolute;
            color: ${color.WHITE};
            top: -5px;
            left: 50%;
            transform: translate(-50%, -100%);
            padding: 1rem 1.5rem;
            border-radius: 0.8rem;
            white-space: nowrap;

            :before {
              content: '';
              position: absolute;
              top: 100%;
              left: 50%;
              margin-left: -5px;
              border: 5px solid transparent;
              border-top: 5px solid ${color.BLACK};
            }
          `}
        >
          {hint}
        </MultiLineText>
      )}
    </Hoverable>
  );
};
