import React from 'react';
import { InputTextProps } from './types';

const InputText: React.FC<InputTextProps> = ({
  field,
  type,
  placeholder,
  handleChange,
}) => {
  return (
    <>
      <input
        {...field}
        type={type}
        autoComplete="off"
        placeholder={placeholder}
        onChange={(event) => {
          if (handleChange) event = handleChange(event);
          field.onChange(event);
        }}
      />
    </>
  );
};

InputText.displayName = 'InputText';

export default InputText;
