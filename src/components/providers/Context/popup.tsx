import * as React from 'react';

export type PopupType = 'LOGIN' | 'SIGNUP';

interface State {
  current?: PopupType;
  showLogin(): void;
  showSignup(): void;
  close(): void;
}

const defaultState: State = {
  current: undefined,
  showLogin: () => {},
  showSignup: () => {},
  close: () => {},
};

export const PopupContext = React.createContext<State>(defaultState);

export default ({ children }: { children: React.ReactNode }) => {
  const [currentPopup, setCurrentPopup] = React.useState<PopupType>();
  const state: State = {
    current: currentPopup,
    showLogin: () => setCurrentPopup('LOGIN'),
    showSignup: () => setCurrentPopup('SIGNUP'),
    close: () => setCurrentPopup(undefined),
  };
  return (
    <PopupContext.Provider value={state}>{children}</PopupContext.Provider>
  );
};
