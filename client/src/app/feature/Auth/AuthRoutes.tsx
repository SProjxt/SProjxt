import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ROUTES } from '../../core/router/path';
import LazySpinner from '../../common/components/Spinner/LazySpinner';

const AuthRoutes: React.FC = () => {
  return (
    <React.Suspense fallback={<LazySpinner />}>
      <Switch>
        <Route
          exact
          path={ROUTES.AUTH__REGISTER}
          component={React.lazy(() => import('./Register'))}
        />
        <Route
          exact
          path={ROUTES.AUTH__LOGIN}
          component={React.lazy(() => import('./Login'))}
        />
        <Redirect to={ROUTES.AUTH__REGISTER} />
      </Switch>
    </React.Suspense>
  );
};

export default AuthRoutes;
