import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import InputTextField from '../../../common/components/Form/Field/InputTextField';
import { FormValues } from './types';

const Register: React.FC = () => {
  const reactHookForm = useForm<FormValues>({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
  });
  const handleSubmit = () => {
    console.log('reactHookForm', reactHookForm.getValues());
  };
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    /** @ts-ignore */
    <FormProvider {...reactHookForm}>
      <form
        className="auth-card"
        onSubmit={reactHookForm.handleSubmit(handleSubmit)}
      >
        <h1>Register</h1>
        <div className="h-100 d-flex flex-column justify-content-center">
          <div className="my-1">
            <InputTextField
              fieldName="username"
              label="username"
              type="text"
              asterisk
              placeholder="Please enter your username"
            />
          </div>
          <div className="my-1">
            <InputTextField
              fieldName="email"
              label="email"
              type="email"
              asterisk
              placeholder="Please enter your email"
            />
          </div>
          <div className="my-1">
            <InputTextField
              fieldName="password"
              label="password"
              type="password"
              asterisk
              placeholder="Please enter your password"
            />
          </div>
          <div className="my-1">
            <InputTextField
              fieldName="passwordConfirm"
              label="Confirm Password"
              type="password"
              asterisk
              placeholder="Confirm Password"
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

export default Register;
