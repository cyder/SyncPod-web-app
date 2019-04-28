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
      key: 'email_address',
      component: (
        <TextInput
          label="メールアドレス"
          placeholder="example@sync-pod.com"
          type="email"
        />
      ),
    },
    {
      key: 'password',
      component: (
        <TextInput
          label="パスワード"
          placeholder="入力してください。"
          type="password"
        />
      ),
    },
    {
      key: 'password_confirm',
      component: (
        <TextInput
          label="パスワード（確認）"
          placeholder="入力してください。"
          type="password"
          warning
        />
      ),
    },
  ];

  return (
    <Form
      forms={forms}
      errorMessage="エラーメッセージが入ります。"
      submitLabel="作成"
    />
  );
};
