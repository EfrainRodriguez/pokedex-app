import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

// SETUP COLORS
const PRIMARY = {
  lighter: '#FFE7D4',
  light: '#FFA37F',
  main: '#FF452B',
  dark: '#B7151B',
  darker: '#7A081E'
};
const SECONDARY = {
  lighter: '#E5F3F5',
  light: '#9DBBC3',
  main: '#263238',
  dark: '#131E28',
  darker: '#070F1A'
};
const INFO = {
  lighter: '#CAFCF5',
  light: '#61EEF1',
  main: '#02AED1',
  dark: '#016696',
  darker: '#003464'
};
const SUCCESS = {
  lighter: '#E9FCD8',
  light: '#AAEF88',
  main: '#54CC39',
  dark: '#20921C',
  darker: '#0A6115'
};
const WARNING = {
  lighter: '#FEF8CB',
  light: '#FEE365',
  main: '#FCC500',
  dark: '#B58500',
  darker: '#785300'
};
const ERROR = {
  lighter: '#FDE6D0',
  light: '#F49F71',
  main: '#DD3F18',
  dark: '#9F130C',
  darker: '#6A040E'
};

const GREY = {
  0: '#FFFFFF',
  100: '#C4E6F5',
  200: '#8DCAEB',
  300: '#4E95C4',
  400: '#225B8A',
  500: '#001E3C',
  600: '#001733',
  700: '#00112B',
  800: '#000C22',
  900: '#00081C',
  500_8: alpha('#001E3C', 0.08),
  500_12: alpha('#001E3C', 0.12),
  500_16: alpha('#001E3C', 0.16),
  500_24: alpha('#001E3C', 0.24),
  500_32: alpha('#001E3C', 0.32),
  500_48: alpha('#001E3C', 0.48),
  500_56: alpha('#001E3C', 0.56),
  500_80: alpha('#001E3C', 0.8)
};

const COMMON = {
  common: { black: '#000', white: '#fff' },
  primary: { ...PRIMARY, contrastText: '#fff' },
  secondary: { ...SECONDARY, contrastText: '#fff' },
  info: { ...INFO, contrastText: '#fff' },
  success: { ...SUCCESS, contrastText: GREY[800] },
  warning: { ...WARNING, contrastText: GREY[800] },
  error: { ...ERROR, contrastText: '#fff' },
  grey: GREY
};

const palette = {
  light: {
    ...COMMON
  },
  dark: {
    ...COMMON,
    background: { paper: GREY[800], default: GREY[900], neutral: GREY[500_16] }
  }
};

export default palette;
