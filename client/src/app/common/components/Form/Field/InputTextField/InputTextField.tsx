import React from 'react';
import { ErrorMessage } from '@hookform/error-message';
import InputText from '../../Element/InputText';
import ErrorMsg from '../ErrorMsg';
import { InputTextFieldProps } from './types';

const InputTextField = React.forwardRef<HTMLInputElement, InputTextFieldProps>(
  ({ label, type, placeholder, asterisk, errors, ...props }, ref) => (
    <div className="input-text-field">
      {label && (
        <label className="my-2">
          <p className="text-uppercase d-flex align-items-center">
            {label} {asterisk && <span className="color-danger ms-2">*</span>}
          </p>
        </label>
      )}
      <InputText type={type} placeholder={placeholder} {...props} ref={ref} />
      {errors && (
        <ErrorMessage
          name={props.name}
          render={({ message }) => <ErrorMsg>{message}</ErrorMsg>}
        />
      )}
    </div>
  )
);

InputTextField.displayName = 'InputAuthTextField';

export default InputTextField;
