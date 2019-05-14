/** @jsx jsx */

import { css, jsx } from '@emotion/core';

import { topRoute } from '@/components/Router/config';
import FilledButton from '@/components/atoms/Buttons/FilledButton';
import SvgIcon from '@/components/atoms/Icons/SvgIcon';
import Center from '@/components/atoms/Layouts/Center';
import MultiLineText from '@/components/atoms/Texts/MultiLineText';
import { color, size } from '@/constants/styles';

export default () => (
  <Center
    css={css`
      background: ${color.PRIMALY_LIGHT};
      width: 100%;
      height: calc(100vh - ${size.HEADER_HEIGHT});
    `}
    direction="column"
  >
    <div
      css={css`
        position: relative;
        width: 80%;
        max-width: 80rem;
      `}
    >
      <SvgIcon
        css={css`
          width: 100%;
        `}
        alt="404 Not Found"
        icon="notFound"
      />
      <MultiLineText
        css={css`
          position: absolute;
          width: 100%;
          bottom: 15%;
          text-align: center;
          font-size: 1.4rem;
          line-height: 3rem;
          font-weight: bold;
        `}
      >
        {
          '指定されたページは存在しませんでした。\nすでに削除されたか、アドレスを間違えている可能性があります。'
        }
      </MultiLineText>
    </div>
    <topRoute.Link params={{}}>
      <FilledButton>TOPに戻る</FilledButton>
    </topRoute.Link>
  </Center>
);
