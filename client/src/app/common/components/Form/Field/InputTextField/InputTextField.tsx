import React from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import InputText from '../../Element/InputText';
import ErrorMsg from '../ErrorMsg';
import { InputTextFieldProps } from './types';

const InputTextField: React.FC<InputTextFieldProps> = ({
  label,
  type,
  fieldName,
  placeholder,
  asterisk,
  handleChange,
}) => {
  const { register } = useFormContext();
  const control = register(fieldName);
  const { field, formState } = useController(control);

  return (
    <div className="input-text-field">
      {label && (
        <label className="my-2">
          <p className="text-uppercase d-flex align-items-center">
            {label} {asterisk && <span className="color-danger ms-2">*</span>}
          </p>
        </label>
      )}
      <InputText
        field={field}
        type={type}
        placeholder={placeholder}
        handleChange={handleChange}
      />
      {formState.errors && (
        <ErrorMessage
          name={field.name}
          render={({ message }) => <ErrorMsg>{message}</ErrorMsg>}
        />
      )}
    </div>
  );
};

InputTextField.displayName = 'InputTextField';

export default InputTextField;
