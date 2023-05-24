import React from 'react';
import { ROUTES } from './core/router/path';
import { BrowserRouter, Switch } from 'react-router-dom';
import RouterRoute from './common/components/Router/RouterRoute';
import LazySpinner from './common/components/Spinner/LazySpinner';
import useAuthorizationGuard from './core/router/guard/useAuthorizationGuard';
import useUnauthorizationGuard from './core/router/guard/useUnauthorizationGuard';

const AppRoutes: React.FC = () => (
  <React.Suspense fallback={<LazySpinner />}>
    <BrowserRouter>
      <Switch>
        <RouterRoute
          path={ROUTES.AUTH}
          component={React.lazy(() => import('./feature/Auth'))}
          activate={[useUnauthorizationGuard]}
        />
        <RouterRoute
          path={ROUTES.FEATURES}
          component={React.lazy(() => import('./feature/Feature'))}
          activate={[useAuthorizationGuard]}
        />
      </Switch>
    </BrowserRouter>
  </React.Suspense>
);

export default AppRoutes;
