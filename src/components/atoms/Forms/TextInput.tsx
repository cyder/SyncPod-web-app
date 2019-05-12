/** @jsx jsx */

import { css, jsx } from '@emotion/core';
import * as React from 'react';

import SvgIcon from '@/components/atoms/Icons/SvgIcon';
import { color } from '@/constants/styles';

type TextInputType = 'text' | 'password' | 'email';

export interface TextInputProps {
  value?: string;
  name?: string;
  placeholder?: string;
  className?: string;
  warning?: boolean;
  type?: TextInputType;
  multiLine?: boolean;
  onChange?(value: string): void;
}

export default ({
  value,
  name,
  placeholder,
  className,
  onChange,
  warning,
  type,
  multiLine,
}: TextInputProps) => {
  const [currentValue, setCurrentValue] = React.useState('');
  const [inFocus, setInFocus] = React.useState(false);

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const data = e.target.value;
      setCurrentValue(data);
      if (onChange) {
        onChange(data);
      }
    },
    [],
  );
  const handleFocus = React.useCallback(() => {
    setInFocus(true);
  }, []);
  const handleBlur = React.useCallback(() => {
    setInFocus(false);
  }, []);

  React.useEffect(() => {
    if (value != null) {
      setCurrentValue(value);
    }
  }, [value]);

  const commonStyle = css`
    border-radius: 2.1rem;
    border: solid 2px ${color.BLACK};
    padding: 1rem 3rem 1rem 1.5rem;
    font-size: 1.4rem;
    outline: 0;
    width: 100%;
    color: inherit;

    ::placeholder {
      font-size: 1rem;
    }
  `;

  return (
    <div
      className={className}
      css={css`
        position: relative;
      `}
    >
      {multiLine ? (
        <textarea
          defaultValue={currentValue}
          css={css`
            ${commonStyle}
            resize: none;

            ::placeholder {
              transform: translate(0, 0.2rem);
            }
          `}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={inFocus ? '' : placeholder}
          id={name}
          onChange={handleChange}
          rows={8}
        />
      ) : (
        <input
          value={currentValue}
          css={css`
            ${commonStyle}

            ::placeholder {
              transform: translate(0, -0.2rem);
            }
          `}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={inFocus ? '' : placeholder}
          id={name}
          type={type || 'text'}
          onChange={handleChange}
        />
      )}
      {warning && (
        <SvgIcon
          css={css`
            position: absolute;
            width: 1.5rem;
            height: 1.5rem;
            top: 0;
            right: 1.2rem;
            bottom: 0;
            margin: auto;
          `}
          icon="warning"
          alt="エラー"
        />
      )}
    </div>
  );
};
