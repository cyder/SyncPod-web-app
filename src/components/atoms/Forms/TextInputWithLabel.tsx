/** @jsx jsx */

import { jsx } from '@emotion/core';

import TextInput, { TextInputProps } from 'components/atoms/Forms/TextInput';
import FormLabel, { FormLabelProps } from 'components/atoms/Forms/FormLabel';

type Props = TextInputProps & FormLabelProps;

export default (props: Props) => {
  const { label, name, hint, className } = props;

  return (
    <FormLabel label={label} name={name} hint={hint} className={className}>
      <TextInput {...props} className={undefined} />
    </FormLabel>
  );
};
