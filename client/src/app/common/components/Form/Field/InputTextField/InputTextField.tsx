import React from 'react';
import { ErrorMessage } from '@hookform/error-message';
import InputText from '../../Element/InputText';
import ErrorMsg from '../ErrorMsg';
import { InputText01FieldProps } from './types';

const InputText01Field = React.forwardRef<
  HTMLInputElement,
  InputText01FieldProps
>(({ label, type, placeholder, asterisk, errors, ...props }, ref) => (
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
));

InputText01Field.displayName = 'InputAuthTextField';

export default InputText01Field;
