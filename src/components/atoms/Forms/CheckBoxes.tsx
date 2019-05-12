/** @jsx jsx */

import { css, jsx } from '@emotion/core';
import { useCallback, useState } from 'react';

import { color } from '@/constants/styles';

export interface CheckBox {
  id: string;
  label: string;
}

export interface CheckBoxesProps {
  items: CheckBox[];
  className?: string;
  name: string;
  value?: string;
  onChange?(id: string): string;
}

export default ({
  className,
  items,
  name,
  value,
  onChange,
}: CheckBoxesProps) => {
  const [currentId, setCurrentId] = useState(value || items[0].id);
  const handleChange = useCallback((id: string) => {
    setCurrentId(id);
    if (onChange) {
      onChange(id);
    }
  }, []);

  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
      `}
      className={className}
    >
      {items.map(item => (
        <label
          css={css`
            display: flex;
            align-items: center;
            cursor: pointer;
            :not(:last-child) {
              margin-right: 2rem;
            }
          `}
          htmlFor={item.id}
        >
          <input
            key={item.id}
            type="radio"
            id={item.id}
            name={name}
            checked={item.id === currentId}
            onChange={() => handleChange(item.id)}
            css={css`
              outline: 0;
              position: relative;
              appearance: none;
              border-radius: 50%;
              margin: 0;
              width: 2rem;
              height: 2rem;
              border: 2px solid ${color.BLACK};

              &:checked::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                margin: auto;
                border-radius: 50%;
                width: 1rem;
                height: 1rem;
                background-color: ${color.PRIMALY};
              }
            `}
          />
          <div
            css={css`
              font-size: 1.4rem;
              margin: 0 0.5rem;
            `}
          >
            {item.label}
          </div>
        </label>
      ))}
    </div>
  );
};
