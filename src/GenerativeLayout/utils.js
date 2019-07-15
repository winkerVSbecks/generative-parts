export const range = n => Array.from(Array(n).keys());

export const randomRange = (min, max) => {
  if (max === undefined) {
    max = min;
    min = 0;
  }

  const value = Math.random() * (max - min) + min;
  return Math.floor(value);
};

export const randomSize = (w, h) => ({
  x: randomRange(1, w),
  y: randomRange(1, h),
  pinned: false,
  align: 'center',
});

export const pickRandom = items =>
  items[Math.floor(Math.random() * items.length)];
