import * as React from 'react';

interface Props {
  children: Date;
  className?: string;
}

export default ({ children, className }: Props) => (
  <p className={className}>
    <time>
      {`${children.getFullYear()}/${children.getMonth() +
        1}/${children.getDate()}`}
    </time>
    に公開
  </p>
);
