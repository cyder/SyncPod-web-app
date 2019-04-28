/** @jsx jsx */

import { jsx } from '@emotion/core';

import TextInput from 'components/atoms/Forms/TextInput';
import Form, { FormElement } from 'components/molecules/Forms/Form';

export default () => {
  const forms: FormElement[] = [
    {
      key: 'account_name',
      component: (
        <TextInput label="アカウント名" placeholder="入力してください。" />
      ),
    },
    {
      key: 'password',
      component: (
        <TextInput
          label="パスワード"
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
      submitLabel="ログイン"
    />
  );
};
