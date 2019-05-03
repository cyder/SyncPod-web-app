interface ValidationResult {
  validity: boolean;
  errorMessage?: string;
}

export const validateEmail = (email: string): ValidationResult => {
  if (!email) {
    return {
      validity: false,
      errorMessage: 'メールアドレスを入力してください。',
    };
  }
  const re = /^[^@\s]+@[^@\s]+$/;
  if (!re.test(String(email).toLowerCase())) {
    return {
      validity: false,
      errorMessage: '有効なメールアドレスではありません。',
    };
  }
  return { validity: true };
};

export const validatePassword = (password: string): ValidationResult => {
  if (!password) {
    return {
      validity: false,
      errorMessage: 'パスワードを入力してください。',
    };
  }
  if (password.length < 6) {
    return {
      validity: false,
      errorMessage: 'パスワードが短すぎます。',
    };
  }
  if (password.length > 128) {
    return {
      validity: false,
      errorMessage: 'パスワードが長すぎます。',
    };
  }
  return { validity: true };
};
