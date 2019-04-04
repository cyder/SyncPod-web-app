import * as React from 'react';

export type PopupType = 'LOGIN' | 'SIGNUP';

interface State {
  current?: PopupType;
  showLogin(): void;
  showSignup(): void;
}

const defaultState: State = {
  current: undefined,
  showLogin: () => {},
  showSignup: () => {},
};

export const PopupContext = React.createContext<State>(defaultState);

export default ({ children }: { children: React.ReactNode }) => {
  const [currentPopup, setCurrentPopup] = React.useState<PopupType>();
  const state: State = {
    current: currentPopup,
    showLogin: () => setCurrentPopup('LOGIN'),
    showSignup: () => setCurrentPopup('SIGNUP'),
  };
  return (
    <PopupContext.Provider value={state}>{children}</PopupContext.Provider>
  );
};
