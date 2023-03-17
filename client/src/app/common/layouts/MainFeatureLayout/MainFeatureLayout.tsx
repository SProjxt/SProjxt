import React from 'react';
import MainContent from '../MainContent';

const MainFeatureLayout: React.FC = (props) => {
  return (
    <>
      <div className="d-flex main-layout h-100">
        <MainContent>{props.children}</MainContent>
      </div>
    </>
  );
};
export default MainFeatureLayout;
