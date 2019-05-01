import * as React from 'react';

type Callback = () => void;

const useWindowEvent = (callback: Callback, target: string): void => {
  React.useEffect(() => {
    window.addEventListener(target, callback);
    return () => {
      window.removeEventListener(target, callback);
    };
  }, [callback]);
};

const useDocumentEvent = (callback: Callback, target: string): void => {
  React.useEffect(() => {
    document.addEventListener(target, callback);
    return () => {
      document.removeEventListener(target, callback);
    };
  }, [callback]);
};

export const useScrollEvent = (callback: Callback): void =>
  useWindowEvent(callback, 'scroll');

export const useResizeEvent = (callback: Callback): void =>
  useWindowEvent(callback, 'resize');

export const useFullScreenChange = (callback: Callback): void => {
  const events = [
    'fullscreenchange',
    'webkitfullscreenchange',
    'mozfullscreenchange',
    'MSFullscreenChange',
  ];
  events.forEach(event => useDocumentEvent(callback, event));
};
