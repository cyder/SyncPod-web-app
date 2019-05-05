/** @jsx jsx */

import { useCallback, useState } from 'react';
import { jsx } from '@emotion/core';

import TextInput from 'components/atoms/Forms/TextInputWithLabel';
import Form, { FormElement } from 'components/molecules/Forms/Form';

import { useLogin, useClearPopup } from 'util/hooks/apollo';

export default () => {
  const clearPopup = useClearPopup();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  const handleSuccess = useCallback(() => {
    clearPopup();
  }, []);
  const handleError = useCallback(() => {
    setEmailError(true);
    setPasswordError(true);
    setErrorMessage(
      'メールアドレス、もしくはパスワードが間違っている可能性があります。',
    );
  }, []);
  const { loading, login } = useLogin(
    email,
    password,
    handleSuccess,
    handleError,
  );
  const clearForm = useCallback(() => {
    setEmailError(false);
    setPasswordError(false);
    setErrorMessage(undefined);
  }, []);
  const validateForm = useCallback((): boolean => {
    if (!email) {
      setEmailError(true);
      setErrorMessage('メールアドレスを入力してください。');
      return false;
    }
    if (!password) {
      setPasswordError(true);
      setErrorMessage('パスワードを入力してください。');
      return false;
    }
    return true;
  }, [email, password]);
  const handleSubmit = useCallback(() => {
    clearForm();
    if (validateForm()) {
      login();
    }
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
