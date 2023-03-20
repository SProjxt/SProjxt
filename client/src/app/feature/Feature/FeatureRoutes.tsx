import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ROUTES } from '../../core/router/path';
import LazySpinner from '../../common/components/Spinner/LazySpinner';

const FeaturesRoutes: React.FC = () => {
  return (
    <React.Suspense fallback={<LazySpinner />}>
      <Switch>
        <Route
          exact
          path={ROUTES.FEATURES__PROJECT}
          component={React.lazy(() => import('./Project'))}
        />
        <Route
          exact
          path={ROUTES.FEATURES__BOARD}
          component={React.lazy(() => import('./Board'))}
        />
        <Route
          exact
          path={ROUTES.FEATURES__BACKLOG}
          component={React.lazy(() => import('./Backlog'))}
        />
        <Route
          exact
          path={ROUTES.FEATURES__MEMBER}
          component={React.lazy(() => import('./Member'))}
        />
        <Route
          exact
          path={ROUTES.FEATURES__STATISTICS}
          component={React.lazy(() => import('./Statistics'))}
        />
        <Redirect to={ROUTES.FEATURES__PROJECT} />
      </Switch>
    </React.Suspense>
  );
};
export default FeaturesRoutes;
