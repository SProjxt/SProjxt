import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputTextField from '../../../common/components/Form/Field/InputTextField';
import validationService from '../../../core/service/validationService';
import { useDispatch } from 'react-redux';
import { executeLoginAction } from '../../../store/feature/Auth/action';
import { FormValues } from './types';

const Login: React.FC = () => {
  const reduxDispatch = useDispatch();
  const schema = yup.object().shape({
    email: yup.string().required().concat(validationService.emailSchema),
    password: yup.string().required(),
  });
  const reactHookForm = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    /** @ts-ignore */
    resolver: yupResolver(schema),
  });
  const handleSubmit = async () => {
    reduxDispatch(executeLoginAction(reactHookForm.getValues()));
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
            label="email"
            type="text"
            asterisk
            {...reactHookForm.register('email')}
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
