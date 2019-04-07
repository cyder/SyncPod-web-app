import * as React from 'react';

import PopupProvider, {
  PopupContext,
} from 'components/providers/Context/popup';

export default ({ children }: { children: React.ReactNode }) => (
  <PopupProvider>{children}</PopupProvider>
);

export { PopupContext };
