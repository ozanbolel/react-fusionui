const duration = 400;

const easeInOutSine = (x: number) => {
  return -(Math.cos(Math.PI * x) - 1) / 2;
};

export const animate = (callback: (value: string) => any, config: { from: number; to: number; onRest?: Function }) => {
  const { from, to, onRest } = config;
  let start: number;

  const step: FrameRequestCallback = () => {
    const now = performance.now();
    if (!start) start = now;
    const progress = (now - start) / duration;

    if (progress < 1) {
      const value = ((to - from) * easeInOutSine(progress) + from).toString();
      callback(value);
      window.requestAnimationFrame(step);
    } else {
      callback(to.toString());
      if (onRest) onRest();
    }
  };

  window.requestAnimationFrame(step);
};
