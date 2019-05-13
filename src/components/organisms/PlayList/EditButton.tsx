/** @jsx jsx */

import { css, jsx } from '@emotion/core';
import { useContext } from 'react';

import TextButton from '@/components/atoms/Buttons/TextButton';
import { editingContet } from '@/components/organisms/Room/Provider';
import { color } from '@/constants/styles';

interface Props {
  className?: string;
}

export default ({ className }: Props) => {
  const { isEditing, setIsEditing } = useContext(editingContet);

  return (
    <div className={className}>
      <TextButton
        css={css`
          padding: 0.5rem 0;
          font-size: 1.2rem;
          ${isEditing && `color: ${color.PRIMALY_DARK}`}
        `}
        onClick={() => setIsEditing(!isEditing)}
      >
        {isEditing ? '編集を終了' : 'プレイリストを編集'}
      </TextButton>
    </div>
  );
};
