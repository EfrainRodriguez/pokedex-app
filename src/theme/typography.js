// ----------------------------------------------------------------------

export function pxToRem(value) {
  return `${value / 16}rem`;
}

const typography = {
  fontFamily: 'Nunito, sans-serif',
  fontWeightRegular: 500,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  body1: {
    lineHeight: 1.5,
    fontSize: pxToRem(16)
  },
  button: {
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: 'uppercase'
  }
};

export default typography;
