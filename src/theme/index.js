import React, { useMemo } from 'react';
// prop types
import PropTypes from 'prop-types';
// material
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';
// hooks
import { useSettings } from '../hooks';
// theme styles
import shape from './shape';
import palette from './palette';
import typography from './typography';
import GlobalStyles from './globalStyles';

// ----------------------------------------------------------------------

const ThemeConfig = ({ children }) => {
  const { themeMode } = useSettings();

  const options = useMemo(
    () => ({
      palette:
        themeMode === 'light'
          ? { ...palette.light, mode: 'light' }
          : { ...palette.dark, mode: 'dark' },
      shape,
      typography
    }),
    [themeMode]
  );

  const theme = createTheme(options);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

ThemeConfig.propTypes = {
  children: PropTypes.node.isRequired
};

export default ThemeConfig;
