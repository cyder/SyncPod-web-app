/** @jsx jsx */

import { ReactNode, useState, useEffect } from 'react';
import { jsx, css } from '@emotion/core';

import TabBar from 'components/organisms/Tab/TabBar';
import ContentWrapper from 'components/organisms/Tab/ContentWrapper';

export interface TabItem {
  title: string;
  component: ReactNode;
}

interface Props {
  tabs: TabItem[];
  index?: number;
  className?: string;
  onChange?(index: number): void;
}

export default ({ tabs, index, className, onChange }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(index || 0);
  useEffect(() => {
    if (index) {
      setCurrentIndex(index);
    }
  }, [index]);
  useEffect(() => {
    if (onChange) {
      onChange(currentIndex);
    }
  }, [currentIndex]);

  return (
    <div
      className={className}
      css={css`
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
      `}
    >
      <TabBar
        titles={tabs.map(tab => tab.title)}
        index={currentIndex}
        onClickItem={setCurrentIndex}
      />
      <ContentWrapper
        css={css`
          flex: 1;
        `}
        isLeftEnd={currentIndex === 0}
        isRightEnd={currentIndex === tabs.length - 1}
      >
        {tabs[currentIndex].component}
      </ContentWrapper>
    </div>
  );
};
