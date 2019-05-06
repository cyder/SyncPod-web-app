/** @jsx jsx */

import { jsx, css } from '@emotion/core';

import VideoItem, {
  VideoData,
} from 'components/organisms/VideoSearch/VideoItem';
import EmptyItem from 'components/organisms/VideoSearch/EmptyItem';

interface Props {
  className?: string;
}

export default ({ className }: Props) => {
  const list: VideoData[] = [
    {
      id: 'video1',
      title: '動画1',
      channelTitle: 'チャンネルタイトル',
      thumbnailUrl: 'https://i.ytimg.com/vi/Egl8rM5vzjo/maxresdefault.jpg',
      published: new Date(),
      description: '説明文\n説明文\n説明文\n説明文\n説明文\n説明文\n説明文',
    },
    {
      id: 'video2',
      title: '動画2',
      channelTitle: 'チャンネルタイトル',
      thumbnailUrl: 'https://i.ytimg.com/vi/Egl8rM5vzjo/maxresdefault.jpg',
      published: new Date(),
      description:
        '説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文',
    },
  ];
  return (
    <div className={className}>
      {list.length ? (
        list.map(item => (
          <VideoItem
            css={css`
              margin-bottom: 2rem;
            `}
            key={item.id}
            {...item}
          />
        ))
      ) : (
        <EmptyItem />
      )}
    </div>
  );
};
