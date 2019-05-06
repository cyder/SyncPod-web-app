import * as React from 'react';

interface Props {
  children: string;
  className?: string;
}

export default ({ children, className }: Props) => (
  <div className={className}>
    {children.split('\n').map((m: string, i: number) => (
      // eslint-disable-next-line react/no-array-index-key
      <p key={i}>{m}</p>
    ))}
  </div>
);
