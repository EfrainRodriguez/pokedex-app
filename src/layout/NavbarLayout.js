import React from 'react';
// material
import { alpha, experimentalStyled as styled } from '@mui/material/styles';
import { Box, AppBar, Toolbar, Switch, Typography } from '@mui/material';
import { Brightness4, BrightnessHigh } from '@mui/icons-material';
// hooks
import { useSettings } from '../hooks';
// constants
import { LAYOUT } from '../utils/constants';

// ----------------------------------------------------------------------

const RootStyle = styled(AppBar)(({ theme }) => ({
  width: '100%',
  color: theme.palette.text.primary,
  backgroundColor: alpha(theme.palette.background.default, 0.95)
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: LAYOUT.APPBAR_MOBILE,
  padding: theme.spacing(0, 3),
  [theme.breakpoints.up('md')]: {
    minHeight: LAYOUT.APPBAR_DESKTOP,
    padding: theme.spacing(0, 20)
  }
}));

const BrandStyle = styled(Typography)(({ theme }) => ({
  letterSpacing: '5px',
  textTransform: 'uppercase',
  fontWeight: 'lighter',
  span: {
    color: theme.palette.primary.main
  }
}));

// ----------------------------------------------------------------------

const DashboardNavbar = () => {
  const { themeMode, toggleMode } = useSettings();
  return (
    <RootStyle>
      <ToolbarStyle>
        <BrandStyle variant="h6">
          Poke<span>Houm</span>
        </BrandStyle>
        <Box sx={{ flexGrow: 1 }} />
        <Box display="flex" alignItems="center">
          {themeMode === 'light' ? (
            <Brightness4 color="primary" />
          ) : (
            <BrightnessHigh color="primary" />
          )}
          <Switch checked={!(themeMode === 'light')} onChange={toggleMode} />
        </Box>
      </ToolbarStyle>
    </RootStyle>
  );
};

export default DashboardNavbar;
