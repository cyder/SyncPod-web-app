/** @jsx jsx */

import { css, jsx } from '@emotion/core';

import TextButton from '@/components/atoms/Buttons/TextButton';
import { color } from '@/constants/styles';

interface Props {
  className?: string;
  isEditing: boolean;
  setIsEditing(flag: boolean): void;
}

export default ({ className, isEditing, setIsEditing }: Props) => (
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
