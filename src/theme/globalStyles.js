import { makeStyles } from '@mui/styles';

// ----------------------------------------------------------------------

const useStyles = makeStyles(() => ({
  '@global': {
    '*': {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box'
    },
    html: {
      width: '100%',
      height: '100%',
      '-ms-text-size-adjust': '100%',
      '-webkit-overflow-scrolling': 'touch'
    },
    body: {
      width: '100%',
      height: '100%'
    },
    '#root': {
      width: '100%',
      height: '100%'
    },
    img: { display: 'block', maxWidth: '100%' }
  }
}));

const GlobalStyles = () => {
  useStyles();
  return null;
};

export default GlobalStyles;
