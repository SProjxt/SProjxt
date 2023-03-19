import React from 'react';
import { ControllerRenderProps, FieldValues } from 'react-hook-form';

export interface InputTextProps {
  field: ControllerRenderProps<FieldValues, string>;
  type: string;
  placeholder: string;
  handleChange?: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => React.ChangeEvent<HTMLInputElement>;
}
