/** @jsx jsx */

import { jsx } from '@emotion/core';

import TextInput, { TextInputProps } from 'components/atoms/Forms/TextInput';
import Label from 'components/atoms/Forms/FormLabel';

interface Props extends TextInputProps {
  label: string;
}

export default (props: Props) => {
  const { label, name, className } = props;

  return (
    <Label label={label} name={name} className={className}>
      <TextInput {...props} className={undefined} />
    </Label>
  );
};
