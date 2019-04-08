/** @jsx jsx */

import { jsx, css } from '@emotion/core';

interface Props {
  path: string;
}

export default  (props : Props) => <img src={props.path} css={css`width: auto; height: 50px; margin-left: -16px; margin-right: auto`}/>;
