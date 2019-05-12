/** @jsx jsx */

import { jsx } from '@emotion/core';
import { useCallback, useState } from 'react';

import TextInput from '@/components/atoms/Forms/TextInputWithLabel';
import Form, { FormElement } from '@/components/molecules/Forms/Form';
import { useClearPopup, useSignup } from '@/util/hooks/apollo';
import { validateEmail, validatePassword } from '@/util/validation';

export default () => {
  const clearPopup = useClearPopup();
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [passwordConfirmError, setPasswordConfirmError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  const handleSuccess = useCallback(() => {
    clearPopup();
  }, []);
  const handleError = useCallback(() => {
    setEmailError(true);
    setErrorMessage(
      '登録に失敗しました。メールアドレスが使われている可能性があります。',
    );
  }, []);
  const { loading, signup } = useSignup(
    name,
    email,
    password,
    handleSuccess,
    handleError,
  );
  const clearForm = useCallback(() => {
    setNameError(false);
    setEmailError(false);
    setPasswordError(false);
    setPasswordConfirmError(false);
    setErrorMessage(undefined);
  }, []);
  const validateForm = useCallback((): boolean => {
    if (!name) {
      setNameError(true);
      setErrorMessage('アカウント名を入力してください。');
      return false;
    }
    const {
      validity: emailValidity,
      errorMessage: emailErrorMessage,
    } = validateEmail(email);
    if (!emailValidity) {
      setEmailError(true);
      setErrorMessage(emailErrorMessage);
      return false;
    }
    const {
      validity: passwordValidity,
      errorMessage: passwordErrorMessage,
    } = validatePassword(password);
    if (!passwordValidity) {
      setPasswordError(true);
      setErrorMessage(passwordErrorMessage);
      return false;
    }
    if (password !== passwordConfirm) {
      setPasswordConfirmError(true);
      setErrorMessage('パスワードが異なります。');
      return false;
    }
    return true;
  }, [name, email, password, passwordConfirm]);
  const handleSubmit = useCallback(() => {
    clearForm();
    if (validateForm()) {
      signup();
    }
  }, [name, email, password, passwordConfirm]);

  const forms: FormElement[] = [
    {
      key: 'account_name',
      component: (
        <TextInput
          value={name}
          onChange={setName}
          label="アカウント名"
          placeholder="入力してください。"
          warning={nameError}
        />
      ),
    },
    {
      key: 'email_address',
      component: (
        <TextInput
          value={email}
          onChange={setEmail}
          label="メールアドレス"
          placeholder="example@sync-pod.com"
          type="email"
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
    {
      key: 'password_confirm',
      component: (
        <TextInput
          value={passwordConfirm}
          onChange={setPasswordConfirm}
          label="パスワード（確認）"
          placeholder="入力してください。"
          type="password"
          warning={passwordConfirmError}
        />
      ),
    },
  ];

  return (
    <Form
      forms={forms}
      errorMessage={errorMessage}
      submitLabel="作成"
      onSubmit={handleSubmit}
      loading={loading}
    />
  );
};
