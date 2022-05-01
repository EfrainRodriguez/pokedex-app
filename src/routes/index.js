import React, { Fragment, Suspense, lazy } from 'react';
// router
import { Routes, Route } from 'react-router-dom';
// components
import { RouteProgress } from '../components';
// layout
import MainLayout from '../layout';
// paths
import { PATH_HOME } from './paths';

export const renderRoutesList = (routes = []) =>
  routes.map((route, index) => {
    const Component = route.component || Fragment;
    const Guard = route.guard || Fragment;
    const Layout = route.layout || Fragment;
    if (!route.routes) {
      return (
        <Route
          key={index}
          path={route.path}
          element={
            <Suspense fallback={<RouteProgress />}>
              <Guard>
                <Layout>
                  <Component />
                </Layout>
              </Guard>
            </Suspense>
          }
        />
      );
    }
    return (
      <Route
        key={index}
        element={
          <Guard>
            <Layout />
          </Guard>
        }
      >
        {renderRoutesList(route.routes)}
      </Route>
    );
  });

export const renderRoutes = (routes = []) => (
  <Routes>{renderRoutesList(routes)}</Routes>
);

export const routes = [
  // home
  {
    path: PATH_HOME.root,
    layout: MainLayout,
    component: lazy(() => import('../pages/Home'))
  },
  {
    path: '*',
    component: lazy(() => import('../pages/Page404'))
  }
];
