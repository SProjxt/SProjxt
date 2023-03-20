import React from 'react';
import { useForm } from 'react-hook-form';
import InputTextField from '../../../common/components/Form/Field/InputTextField';
import { FormValues } from './types';

const Login: React.FC = () => {
  const reactHookForm = useForm<FormValues>({
    defaultValues: {
      username: '',
      password: '',
    },
  });
  const handleSubmit = () => {
    console.log('reactHookForm', reactHookForm.getValues());
  };
  return (
    <form
      className="auth-card"
      onSubmit={reactHookForm.handleSubmit(handleSubmit)}
    >
      <h1>Login</h1>
      <div className="h-100 d-flex flex-column justify-content-center">
        <div className="my-1">
          <InputTextField
            label="username"
            type="text"
            asterisk
            {...reactHookForm.register('username')}
          />
        </div>
        <div className="my-1">
          <InputTextField
            label="password"
            type="password"
            asterisk
            {...reactHookForm.register('password')}
          />
        </div>
        <p className="my-1">
          Still don&apos;t have an account?{' '}
          <span className="color-main">Register</span>
        </p>
      </div>
      <div className="d-flex justify-content-center">
        <button type="submit" className="btn-main text-center">
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Login;
