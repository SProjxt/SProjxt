import React from 'react';
import { useLocation } from 'react-router-dom';
import { ROUTES } from '../../../core/router/path';
import Navigation from '../../components/Navigation';
import MainContent from '../MainContent';

const MainFeatureLayout: React.FC = (props) => {
  const reactLocation = useLocation();
  return (
    <>
      {reactLocation.pathname === ROUTES.FEATURES__PROJECT && (
        <div className="h-100 d-flex flex-column justify-content-center align-items-center">
          <MainContent>{props.children}</MainContent>
        </div>
      )}
      {reactLocation.pathname !== ROUTES.FEATURES__PROJECT && (
        <div className="row feature-layout-container">
          <div className="col-1">
            <Navigation />
          </div>
          <div className="col-11 feature-layout-content">
            <MainContent>{props.children}</MainContent>
          </div>
        </div>
      )}
    </>
  );
};
export default MainFeatureLayout;
