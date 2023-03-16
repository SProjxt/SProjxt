import React from 'react';
import { InputTextProps } from './types';

const InputText: React.FC<InputTextProps> = ({
  field,
  placeholder,
  handleChange,
}) => {
  return (
    <>
      <input
        {...field}
        placeholder={placeholder}
        onChange={(event) => {
          if (handleChange) return field.onChange(event);
        }}
      />
    </>
  );
};

export default InputText;
