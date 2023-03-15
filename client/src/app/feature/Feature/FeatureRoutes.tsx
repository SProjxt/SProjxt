import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ROUTES } from '../../core/router/path';
import LazySpinner from '../../common/components/Spinner/LazySpinner';

const FeaturesRoutes: React.FC = () => {
  return (
    <React.Suspense fallback={<LazySpinner />}>
      <Switch>
        <Route
          path={ROUTES.FEATURES__PROJECT}
          component={React.lazy(() => import('./Project'))}
        />
        <Redirect to={ROUTES.FEATURES__PROJECT} />
      </Switch>
    </React.Suspense>
  );
};
export default FeaturesRoutes;
