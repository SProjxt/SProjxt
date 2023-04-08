import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { PageValidationSchema } from './validation';
import InputTextField from '../../../common/components/Form/Field/InputTextField';
import SelectField from '../../../common/components/Form/Field/SelectField';
import { FormValues } from './types';
import { DepartmentOptions } from '../../../core/define/common';
import apiService from '../../../api/service/apiService';

const Register: React.FC = () => {
  const reactHookForm = useForm<FormValues>({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
      department: '',
    },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    /** @ts-ignore */
    resolver: yupResolver(PageValidationSchema),
  });
  const handleSubmit = async () => {
    try {
      await apiService.postCreateUser({
        email: reactHookForm.getValues('email'),
        username: reactHookForm.getValues('username'),
        password: reactHookForm.getValues('password'),
        department: reactHookForm.getValues('department'),
      });
    } catch (error) {
      console.log(error);
    }
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
            errors={reactHookForm.formState.errors}
          />
        </div>
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
          <SelectField
            label="department"
            options={DepartmentOptions}
            asterisk
            {...reactHookForm.register('department')}
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
        <div className="my-1">
          <InputTextField
            label="Confirm Password"
            type="password"
            asterisk
            {...reactHookForm.register('passwordConfirm')}
            errors={reactHookForm.formState.errors}
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
