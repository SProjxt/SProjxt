// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
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
    /** @ts-ignore */
    <FormProvider {...reactHookForm}>
      <form
        className="login-card"
        onSubmit={reactHookForm.handleSubmit(handleSubmit)}
      >
        <h1>Login</h1>
        <div className="h-100 d-flex flex-column justify-content-center">
          <div className="my-2">
            <InputTextField
              fieldName="username"
              label="username"
              type="text"
              asterisk
              placeholder="Please enter your username"
            />
          </div>
          <div className="my-2">
            <InputTextField
              fieldName="password"
              label="password"
              type="password"
              asterisk
              placeholder="Please enter your password"
            />
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn-main text-center">
            Confirm
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default Login;
