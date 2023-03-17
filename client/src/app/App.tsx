import React from 'react';
import AppRoutes from './AppRoutes';
import _ from '../another-module';

const App: React.FC = () => {
  console.log(_.join(['Another', 'module', 'loaded!'], ' '));

  return <AppRoutes />;
};

export default App;
