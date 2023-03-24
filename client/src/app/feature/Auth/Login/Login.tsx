import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputTextField from '../../../common/components/Form/Field/InputTextField';
import { FormValues } from './types';

const Login: React.FC = () => {
  const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
  });
  const reactHookForm = useForm<FormValues>({
    defaultValues: {
      username: '',
      password: '',
    },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    /** @ts-ignore */
    resolver: yupResolver(schema),
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
            errors={reactHookForm.formState.errors}
          />
        </div>
        <div className="my-1">
          <InputTextField
            label="password"
            type="password"
            asterisk
            {...reactHookForm.register('password')}
            errors={reactHookForm.formState.errors}
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
