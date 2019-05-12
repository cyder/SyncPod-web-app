/** @jsx jsx */

import { css, jsx } from '@emotion/core';
import { useCallback } from 'react';

import TabBarItem from '@/components/organisms/Tab/TabBarItem';
import { color } from '@/constants/styles';

interface Props {
  titles: string[];
  index: number;
  onClickItem?(index: number): void;
}

export default ({ titles, index, onClickItem }: Props) => {
  const handleClick = useCallback(
    (i: number) => {
      if (onClickItem) {
        onClickItem(i);
      }
    },
    [onClickItem],
  );
  return (
    <div
      css={css`
        display: flex;
      `}
    >
      {titles.map((title, i) => [
        <TabBarItem
          key={title}
          title={title}
          isSelected={index === i}
          onClick={() => handleClick(i)}
        />,
        <div
          key={`${title}_spacer`}
          css={css`
            :not(:last-child) {
              width: 3px;
              border-bottom: 2px solid ${color.PRIMALY};
            }
          `}
        />,
      ])}
    </div>
  );
};
