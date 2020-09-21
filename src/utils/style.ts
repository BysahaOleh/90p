export const pxToRem = (px: number, suffix = ''): string => `${suffix}${(1 / 16) * px}rem`;
