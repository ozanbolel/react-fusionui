export const sliceFloat = (string: string) => {
  const match = string.match(/[+-]?\d+(\.\d+)?/g);

  if (match) {
    return parseFloat(match[0]);
  } else {
    return 0;
  }
};
