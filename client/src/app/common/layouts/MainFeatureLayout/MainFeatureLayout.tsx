import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ROUTES } from '../../../core/router/path';
import Navigation from '../../components/Navigation';
import MainContent from '../MainContent';
import { NavigationUrlOptions } from '../../../core/define/common';

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
          <div className="col-1 navigation-content">
            <Navigation />
          </div>
          <div className="col-11 feature-layout-content">
            <MainContent>
              <div className="p-4">
                <div className="d-flex justify-content-between mb-4">
                  <p className="text-uppercase">
                    <NavLink to={ROUTES.FEATURES__PROJECT}>project</NavLink>
                    <span className="mx-2">/</span>
                    <span>
                      {
                        NavigationUrlOptions.find(
                          (item) => item.value === reactLocation.pathname
                        )?.text
                      }
                    </span>
                  </p>
                  <div className="d-flex align-items-center">
                    <div className="avatar me-3" />
                    <p>Username</p>
                  </div>
                </div>
                <div className="main-content">{props.children}</div>
              </div>
            </MainContent>
          </div>
        </div>
      )}
    </>
  );
};
export default MainFeatureLayout;
