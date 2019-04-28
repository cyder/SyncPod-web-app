/** @jsx jsx */

import * as React from 'react';
import { jsx, css } from '@emotion/core';

import SvgIcon from 'components/atoms/Icons/SvgIcon';

import { color } from 'constants/styles';

interface Props {
  value?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  className?: string;
  warning?: boolean;
  type?: string;
  onChange?(value: string): void;
}

export default ({
  value,
  name,
  label,
  placeholder,
  className,
  onChange,
  warning,
  type,
}: Props) => {
  const [currentValue, setCurrentValue] = React.useState(value || '');
  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const data = e.target.value;
      setCurrentValue(data);
      if (onChange) {
        onChange(data);
      }
    },
    [],
  );

  React.useEffect(() => {
    if (value != null) {
      setCurrentValue(value);
    }
  }, [value]);

  return (
    <div className={className}>
      <label htmlFor={name}>
        <div
          css={css`
            font-size: 1.2rem;
            padding: 1rem 0;
          `}
        >
          {label}
        </div>
        <div
          css={css`
            position: relative;
          `}
        >
          <input
            value={currentValue}
            css={css`
              border-radius: 1000px;
              border: solid 2px ${color.BLACK};
              padding: 1rem 3rem 1rem 1.5rem;
              font-size: 1.4rem;
              outline: 0;
              width: 100%;
            `}
            placeholder={placeholder}
            name={name}
            type={type || 'text'}
            onChange={handleChange}
          />
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
      </label>
    </div>
  );
};
