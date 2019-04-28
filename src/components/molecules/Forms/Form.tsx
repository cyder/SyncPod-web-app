/** @jsx jsx */

import * as React from 'react';
import { jsx, css } from '@emotion/core';

import FilledButton from 'components/atoms/Buttons/FilledButton';

import { color } from 'constants/styles';

export interface FormElement {
  key: string;
  component: React.ReactNode;
}

interface Props {
  forms: FormElement[];
  errorMessage?: string;
  submitLabel?: string;
  onSubmit?(): void;
}

export default ({ forms, errorMessage, submitLabel, onSubmit }: Props) => (
  <form
    css={css`
      width: 30rem;
    `}
  >
    {forms.map(form => (
      <div
        key={form.key}
        css={css`
          margin-bottom: 0.5rem;
        `}
      >
        {form.component}
      </div>
    ))}
    {errorMessage && (
      <p
        css={css`
          color: ${color.PRIMALY_DARK};
          font-size: 1.2rem;
          margin: 1rem 0;
        `}
      >
        {errorMessage}
      </p>
    )}
    {submitLabel && (
      <FilledButton
        css={css`
          margin: 2rem auto 1rem;
          min-width: 14rem;
        `}
        onClick={onSubmit}
      >
        {submitLabel}
      </FilledButton>
    )}
  </form>
);
