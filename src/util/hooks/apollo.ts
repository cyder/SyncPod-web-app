import { useCallback, useState } from 'react';
import { useMutation } from 'react-apollo-hooks';

import { ClearPopup } from '@/queries/__generated__/ClearPopup';
import { Login, LoginVariables } from '@/queries/__generated__/Login';
import { OwnUser } from '@/queries/__generated__/OwnUser';
import { Signup, SignupVariables } from '@/queries/__generated__/Signup';
import LoginMutation from '@/queries/login';
import GetOwnUser from '@/queries/own-user';
import { clearPopupMutation } from '@/queries/popup';
import SignUpMutation from '@/queries/signup';

export const useClearPopup = (): (() => void) => {
  const clearPopup = useMutation<ClearPopup>(clearPopupMutation);
  return useCallback(() => {
    clearPopup();
  }, []);
};

export const useSignup = (
  name: string,
  email: string,
  password: string,
  onSuccess?: (value?: Signup) => void,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onFailed?: (error: any) => void,
): { loading: boolean; signup: () => void } => {
  const [loading, setLoading] = useState(false);
  const mutation = useMutation<Signup, SignupVariables>(SignUpMutation, {
    update: (proxy, result) => {
      if (!result.data) {
        return;
      }
      proxy.writeQuery<OwnUser>({
        query: GetOwnUser,
        data: { ownUser: result.data.signup },
      });
    },
  });
  const signup = useCallback(() => {
    setLoading(true);
    mutation({
      variables: { name, email, password },
    }).then(
      result => {
        setLoading(false);
        if (onSuccess) {
          onSuccess(result.data);
        }
      },
      error => {
        setLoading(false);
        if (onFailed) {
          onFailed(error);
        }
      },
    );
  }, [name, email, password]);
  return { loading, signup };
};

export const useLogin = (
  email: string,
  password: string,
  onSuccess?: (value?: Login) => void,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onFailed?: (error: any) => void,
): { loading: boolean; login: () => void } => {
  const [loading, setLoading] = useState(false);
  const mutation = useMutation<Login, LoginVariables>(LoginMutation, {
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
  const login = useCallback(() => {
    setLoading(true);
    mutation({
      variables: { email, password },
    }).then(
      result => {
        setLoading(false);
        if (onSuccess) {
          onSuccess(result.data);
        }
      },
      error => {
        setLoading(false);
        if (onFailed) {
          onFailed(error);
        }
      },
    );
  }, [email, password]);
  return { loading, login };
};
