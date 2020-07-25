const duration = 400;

const easeInOutQuad = (progress: number) => {
  return progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
};

export const animate = (callback: (value: string) => any, config: { from: number; to: number; onRest?: Function }) => {
  const { from, to, onRest } = config;
  let start: number;

  const step: FrameRequestCallback = () => {
    const now = performance.now();
    if (!start) start = now;
    const progress = (now - start) / duration;

    if (progress < 1) {
      const value = ((to - from) * easeInOutQuad(progress) + from).toFixed(2);
      callback(value);
      window.requestAnimationFrame(step);
    } else {
      if (onRest) onRest();
    }
  };

  window.requestAnimationFrame(step);
};
