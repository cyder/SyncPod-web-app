import * as React from 'react';

interface Props {
  children: Date;
  className?: string;
}

// TODO: 現在との時刻の差を見て表示する内容を変更する
export default ({ children, className }: Props) => (
  <time className={className}>
    {`${children.getHours()}:${children.getMinutes()}`}
  </time>
);
