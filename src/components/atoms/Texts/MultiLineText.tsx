import * as React from 'react';

interface Props {
  children: string;
  className?: string;
}

export default ({ children, className }: Props) => (
  <div className={className}>
    {children.split('\n').map((m: string) => (
      <p key={m}>{m}</p>
    ))}
  </div>
);
