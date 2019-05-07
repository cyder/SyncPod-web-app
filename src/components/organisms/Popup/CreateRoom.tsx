/** @jsx jsx */

import { jsx } from '@emotion/core';

import TextInput from 'components/atoms/Forms/TextInputWithLabel';
import Form, { FormElement } from 'components/molecules/Forms/Form';
import CheckBoxes from 'components/atoms/Forms/CheckBoxesWithLabel';

export default () => {
  const forms: FormElement[] = [
    {
      key: 'name',
      component: (
        <TextInput label="ルーム名" placeholder="入力してください。" warning />
      ),
    },
    {
      key: 'description',
      component: (
        <TextInput
          label="ルーム名"
          placeholder="入力してください。"
          warning
          multiLine
        />
      ),
    },
    {
      key: 'is-public',
      component: (
        <CheckBoxes
          label="公開設定"
          hint={
            '一般公開にすると全てのユーザが、\n限定公開にするとルームURLもしくはルームKeyを\n知っているユーザのみが入室できます。'
          }
          items={[
            { id: 'public', label: '一般公開' },
            { id: 'private', label: '限定公開' },
          ]}
          name="is-public"
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
