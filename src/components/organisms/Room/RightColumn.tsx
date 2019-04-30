/** @jsx jsx */

import { jsx } from '@emotion/core';

interface Props {
  className?: string;
  isEditing: boolean;
  setIsEditing(flag: boolean): void;
}

export default ({ className, isEditing, setIsEditing }: Props) => (
  <div className={className}>
    これはTabです
    <button type="button" onClick={() => setIsEditing(!isEditing)}>
      {isEditing ? '編集を終了する' : '編集する'}
    </button>
  </div>
);
