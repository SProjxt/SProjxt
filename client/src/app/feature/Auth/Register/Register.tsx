import React from 'react';
import { useForm } from 'react-hook-form';
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
    <form
      className="auth-card"
      onSubmit={reactHookForm.handleSubmit(handleSubmit)}
    >
      <h1>Register</h1>
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
            label="email"
            type="email"
            asterisk
            {...reactHookForm.register('email')}
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
        <div className="my-1">
          <InputTextField
            label="Confirm Password"
            type="password"
            asterisk
            {...reactHookForm.register('passwordConfirm')}
          />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button type="submit" className="btn-main text-center">
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Register;
