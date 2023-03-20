import React from 'react';
import { useLocation } from 'react-router-dom';
import MainContent from '../MainContent';

const MainFeatureLayout: React.FC = (props) => {
  const reactLocation = useLocation();
  console.log(reactLocation.pathname);
  return (
    <>
      <div className="h-100 d-flex flex-column justify-content-center align-items-center">
        <MainContent>{props.children}</MainContent>
      </div>
    </>
  );
};
export default MainFeatureLayout;
