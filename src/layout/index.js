import React from 'react';
// prop types
import PropTypes from 'prop-types';
// router
import { Outlet } from 'react-router-dom';
// redux
import { useSelector } from 'react-redux';
// material
import { experimentalStyled as styled } from '@mui/material/styles';
// components
import NavbarLayout from './NavbarLayout';
import LoadingPage from '../pages/LoadingPage';
// constants
import { LAYOUT } from '../utils/constants';

// ----------------------------------------------------------------------

const RootStyle = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden'
});

const MainStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  padding: theme.spacing(0, 3),
  paddingTop: LAYOUT.APPBAR_MOBILE + 24,
  paddingBottom: theme.spacing(5),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(0, 20),
    paddingTop: LAYOUT.APPBAR_DESKTOP + 24
  }
}));

// ----------------------------------------------------------------------

const DashboardLayout = ({ children }) => {
  const { isLoading } = useSelector((state) => state.common);

  return (
    <RootStyle>
      <NavbarLayout />
      {isLoading && <LoadingPage />}
      <MainStyle>{children || <Outlet />}</MainStyle>
    </RootStyle>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.node
};

export default DashboardLayout;
