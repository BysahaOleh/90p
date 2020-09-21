import { pxToRem } from './utils/style';

export const colors = {
  white: '#FFFFFF',
  black: '#000000',
  text: '#333333',
  textPlaceholder: '#666666',
  primary: '#5BA6FA',
  secondary: '#3F8DE5',
};

export const theme = {
  colors,
  typography: {
    base: {
      color: colors.text,
    },
    h1: {
      fontSize: pxToRem(24),
    },
    text: {
      fontSize: pxToRem(16),
    },
  },
  button: {
    base: {
      fontSize: pxToRem(18),
      padding: pxToRem(15),
      color: colors.text,
    },
  },
};
