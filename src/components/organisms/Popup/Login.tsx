/** @jsx jsx */

import { useCallback, useState } from 'react';
import { jsx } from '@emotion/core';
import { useMutation } from 'react-apollo-hooks';

import TextInput from 'components/atoms/Forms/TextInputWithLabel';
import Form, { FormElement } from 'components/molecules/Forms/Form';

import LoginMutation from 'queries/login';
import GetOwnUser from 'queries/own-user';
import { Login, LoginVariables } from 'queries/__generated__/Login';
import { OwnUser } from 'queries/__generated__/OwnUser';

export default () => {
  const login = useMutation<Login, LoginVariables>(LoginMutation, {
    update: (proxy, result) => {
      if (!result.data) {
        return;
      }
      proxy.writeQuery<OwnUser>({
        query: GetOwnUser,
        data: { ownUser: result.data.login },
      });
    },
  });
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [loading, setLoading] = useState(false);
  const handleSubmit = useCallback(() => {
    setLoading(true);
    setEmailError(false);
    setPasswordError(false);
    setErrorMessage(undefined);
    login({
      variables: { email, password },
    }).then(
      () => {
        setLoading(false);
      },
      () => {
        setLoading(false);
        setEmailError(true);
        setPasswordError(true);
        setErrorMessage(
          'メールアドレス、もしくはパスワードが間違っている可能性があります。',
        );
      },
    );
  }, [email, password]);

  const forms: FormElement[] = [
    {
      key: 'account_name',
      component: (
        <TextInput
          value={email}
          onChange={setEmail}
          label="メールアドレス"
          type="email"
          placeholder="入力してください。"
          warning={emailError}
        />
      ),
    },
    {
      key: 'password',
      component: (
        <TextInput
          value={password}
          onChange={setPassword}
          label="パスワード"
          placeholder="入力してください。"
          type="password"
          warning={passwordError}
        />
      ),
    },
  ];

  return (
    <Form
      forms={forms}
      errorMessage={errorMessage}
      submitLabel="ログイン"
      onSubmit={handleSubmit}
      loading={loading}
    />
  );
};
