import React from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import InputText from '../../Element/InputText';
import ErrorMsg from '../ErrorMsg';
import { InputTextFieldProps } from './types';

const InputTextField: React.FC<InputTextFieldProps> = ({
  label,
  fieldName,
  placeholder,
  asterisk,
  handleChange,
}) => {
  const { register } = useFormContext();
  const control = register(fieldName);
  const { field, formState } = useController(control);

  return (
    <>
      {label && (
        <label>
          <p>
            {label} {asterisk && <span>*</span>}
          </p>
        </label>
      )}
      <InputText
        field={field}
        placeholder={placeholder}
        handleChange={handleChange}
      />
      {formState.errors && (
        <ErrorMessage
          name={field.name}
          render={({ message }) => <ErrorMsg>{message}</ErrorMsg>}
        />
      )}
    </>
  );
};

export default InputTextField;
