export const currentFullScreenElement = (): Element | null => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const doc = document as any;
  return (
    doc.fullscreenElement ||
    doc.webkitFullscreenElement ||
    doc.mozFullScreenElement
  );
};

export const openFullScreen = (element: Element): void => {
  if (currentFullScreenElement()) {
    return;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const el = element as any;

  if (el.requestFullscreen) {
    el.requestFullscreen();
  } else if (el.mozRequestFullScreen) {
    /* Firefox */
    el.mozRequestFullScreen();
  } else if (el.webkitRequestFullscreen) {
    /* Chrome, Safari and Opera */
    el.webkitRequestFullscreen();
  } else if (el.msRequestFullscreen) {
    /* IE/Edge */
    el.msRequestFullscreen();
  }
};

export const closeFullScreen = (): void => {
  if (!currentFullScreenElement()) {
    return;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const doc = document as any;

  if (doc.exitFullscreen) {
    doc.exitFullscreen();
  } else if (doc.mozCancelFullScreen) {
    /* Firefox */
    doc.mozCancelFullScreen();
  } else if (doc.webkitExitFullscreen) {
    /* Chrome, Safari and Opera */
    doc.webkitExitFullscreen();
  } else if (doc.msExitFullscreen) {
    /* IE/Edge */
    doc.msExitFullscreen();
  }
};
