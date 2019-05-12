/** @jsx jsx */

import { css, jsx } from '@emotion/core';

import CheckBoxes, {
  CheckBoxesProps,
} from '@/components/atoms/Forms/CheckBoxes';
import FormLabel, { FormLabelProps } from '@/components/atoms/Forms/FormLabel';

type Props = CheckBoxesProps & FormLabelProps;

export default (props: Props) => {
  const { label, name, hint, className } = props;

  return (
    <FormLabel label={label} name={name} hint={hint} className={className}>
      <CheckBoxes
        css={css`
          padding-bottom: 1rem;
        `}
        {...props}
        className={undefined}
      />
    </FormLabel>
  );
};
