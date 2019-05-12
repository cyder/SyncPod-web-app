/** @jsx jsx */

import { jsx } from '@emotion/core';

import FormLabel, { FormLabelProps } from '@/components/atoms/Forms/FormLabel';
import TextInput, { TextInputProps } from '@/components/atoms/Forms/TextInput';

type Props = TextInputProps & FormLabelProps;

export default (props: Props) => {
  const { label, name, hint, className } = props;

  return (
    <FormLabel label={label} name={name} hint={hint} className={className}>
      <TextInput {...props} className={undefined} />
    </FormLabel>
  );
};
