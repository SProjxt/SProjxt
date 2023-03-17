import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { square } from '../../../core/service/commonService';

const Login: React.FC = () => {
  console.log(square(1, 2));
  return (
    <form className="login-card">
      <h1>Login</h1>
      <p>text</p>
      <div className="d-flex justify-content-center">
        <button type="submit" className="btn-main text-center">
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Login;
