/** @jsx jsx */

import { css, jsx } from '@emotion/core';

import EmptyItem from '@/components/organisms/PlayList/EmptyItem';
import VideoItem, {
  VideoData,
} from '@/components/organisms/PlayList/VideoItem';

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
    },
    {
      id: 'video2',
      title: '動画2',
      channelTitle: 'チャンネルタイトル',
      thumbnailUrl: 'https://i.ytimg.com/vi/Egl8rM5vzjo/maxresdefault.jpg',
      published: new Date(),
    },
  ];
  return (
    <div
      className={className}
      css={css`
        overflow: auto;
      `}
    >
      {list.length ? (
        list.map(item => <VideoItem key={item.id} {...item} />)
      ) : (
        <EmptyItem />
      )}
    </div>
  );
};
