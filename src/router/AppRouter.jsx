import { Route, Routes } from 'react-router-dom';

import { LoginPage } from '../auth';
import {
  PrivateRoute,
  PublicRoute,
  ROUTE_DEFAULT_PATH,
  ROUTE_LOGIN,
} from '../router';
import { HeroRoutes } from '../heroes';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        {/* <Route path={ROUTE_LOGIN} element={<LoginPage />} /> */}
        {/* <Route
          path={ROUTE_LOGIN}
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        /> */}

        <Route
          path={`${ROUTE_LOGIN}/*`}
          element={
            <PublicRoute>
              <Routes>
                <Route path={ROUTE_DEFAULT_PATH} element={<LoginPage />} />
              </Routes>
            </PublicRoute>
          }
        />

        <Route
          path={ROUTE_DEFAULT_PATH}
          element={
            <PrivateRoute>
              <HeroRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};
