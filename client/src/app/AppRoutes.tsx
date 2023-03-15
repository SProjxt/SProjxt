import React from 'react';
import { ROUTES } from './core/router/path';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LazySpinner from './common/components/Spinner/LazySpinner';

const AppRoutes: React.FC = () => (
  <React.Suspense fallback={<LazySpinner />}>
    <BrowserRouter>
      <Switch>
        <Route
          path={ROUTES.AUTH}
          component={React.lazy(() => import('./feature/Auth'))}
        />
        <Route
          path={ROUTES.FEATURES}
          component={React.lazy(() => import('./feature/Feature'))}
        />
      </Switch>
    </BrowserRouter>
  </React.Suspense>
);

export default AppRoutes;