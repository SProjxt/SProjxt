import React from 'react';
import AuthRoutes from './AuthRoutes';
import MainAuthLayout from '../../common/layouts/MainAuthLayout';

const Auth: React.FC = () => {
  return (
    <MainAuthLayout>
      <AuthRoutes />
    </MainAuthLayout>
  );
};

export default Auth;
