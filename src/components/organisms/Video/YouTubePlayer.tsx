/** @jsx jsx */

import { jsx, ClassNames } from '@emotion/core';
import YouTube from 'react-youtube';

import { color } from 'constants/styles';

export default () => (
  <ClassNames>
    {({ css }) => (
      <YouTube
        // TODO: 差し替え
        videoId="zgaxZkg5Daw"
        containerClassName={css`
          width: 100%;
          height: 100%;
          background-color: ${color.BLACK_DARK};
        `}
        className={css`
          width: 100%;
          height: 100%;
        `}
        opts={{
          playerVars: {
            controls: 0,
            modestbranding: 1,
            showinfo: 0,
            rel: 0,
            // TODO:  以下削除
            autoplay: 1,
            loop: 1,
          },
        }}
      />
    )}
  </ClassNames>
);
