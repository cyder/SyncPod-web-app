/** @jsx jsx */

import { jsx } from '@emotion/core';

import TextInput from 'components/atoms/Forms/TextInputWithLabel';
import Form, { FormElement } from 'components/molecules/Forms/Form';

export default () => {
  const forms: FormElement[] = [
    {
      key: 'room_key',
      component: (
        <TextInput
          label="ルームキー"
          placeholder="入力してください。"
          warning
        />
      ),
    },
  ];

  return (
    <Form
      forms={forms}
      errorMessage="エラーメッセージが入ります。"
      submitLabel="参加"
    />
  );
};
