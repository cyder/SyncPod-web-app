/** @jsx jsx */

import { css, jsx } from '@emotion/core';
import { useCallback, useContext, useMemo } from 'react';

import Chat from '@/components/organisms/Chat';
import PlayList from '@/components/organisms/PlayList';
import { editingContet } from '@/components/organisms/Room/Provider';
import Tab, { TabItem } from '@/components/organisms/Tab';

interface Props {
  className?: string;
}

export default ({ className }: Props) => {
  const { setIsEditing } = useContext(editingContet);
  const chatTab = useMemo<TabItem>(
    () => ({
      title: 'チャット',
      component: <Chat />,
    }),
    [],
  );
  const playlistTab = useMemo<TabItem>(
    () => ({
      title: 'プレイリスト',
      component: <PlayList />,
    }),
    [],
  );
  const tabs = useMemo<TabItem[]>(() => [chatTab, playlistTab], []);

  const handleTabChange = useCallback((index: number) => {
    if (tabs[index] === chatTab) {
      setIsEditing(false);
    }
  }, []);

  return (
    <div
      className={className}
      css={css`
        padding: 2rem 0;
        display: flex;
        flex-direction: column;
      `}
    >
      <Tab tabs={tabs} onChange={handleTabChange} />
    </div>
  );
};
