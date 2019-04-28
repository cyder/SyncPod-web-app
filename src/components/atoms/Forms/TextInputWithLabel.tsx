/** @jsx jsx */

import { jsx, css } from '@emotion/core';

import TextInput, { TextInputProps } from 'components/atoms/Forms/TextInput';

interface Props extends TextInputProps {
  label?: string;
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
}: Props) => (
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
      <TextInput
        value={value}
        name={name}
        placeholder={placeholder}
        warning={warning}
        type={type}
        onChange={onChange}
      />
    </label>
  </div>
);
