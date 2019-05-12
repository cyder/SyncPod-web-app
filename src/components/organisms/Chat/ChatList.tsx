/** @jsx jsx */

import { css, jsx } from '@emotion/core';

import ChatItem, {
  ChatData,
  UserData,
} from '@/components/organisms/Chat/ChatItem';

interface Props {
  className?: string;
}

export default ({ className }: Props) => {
  const user: UserData = {
    id: 'user1',
    name: 'ユーザ1',
    icon:
      'https://pbs.twimg.com/profile_images/1085340387277828096/kEcxyrYF_400x400.jpg',
  };
  const list: ChatData[] = [
    { id: 'chat1', user, text: 'チャットのテキスト', createdAt: new Date() },
    {
      id: 'chat2',
      user,
      text:
        '長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト',
      createdAt: new Date(),
    },
    {
      id: 'chat3',
      user: { id: 'user2', name: 'ユーザ2' },
      text: 'チャットのテキスト',
      createdAt: new Date(),
    },
  ];
  return (
    <div
      className={className}
      css={css`
        overflow: auto;
      `}
    >
      {list.map(item => (
        <ChatItem key={item.id} {...item} />
      ))}
    </div>
  );
};
