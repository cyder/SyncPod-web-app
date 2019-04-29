/** @jsx jsx */

import { jsx, css } from '@emotion/core';

interface Props {
  className?: string;
  isEditing: boolean;
  setIsEditing(flag: boolean): void;
}

export default ({ className, isEditing, setIsEditing }: Props) => (
  <div
    css={css`
      background-color: #00ff00;
    `}
    className={className}
  >
    これはTabです
    <button type="button" onClick={() => setIsEditing(!isEditing)}>
      {isEditing ? '編集を終了する' : '編集する'}
    </button>
  </div>
);
