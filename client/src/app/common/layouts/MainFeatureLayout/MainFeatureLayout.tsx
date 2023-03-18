import React from 'react';
import MainContent from '../MainContent';

const MainFeatureLayout: React.FC = (props) => {
  return (
    <>
      <div className="h-100 d-flex flex-column justify-content-center align-items-center">
        <MainContent>{props.children}</MainContent>
      </div>
    </>
  );
};
export default MainFeatureLayout;
