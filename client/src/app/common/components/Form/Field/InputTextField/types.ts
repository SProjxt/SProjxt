import { UseFormRegisterReturn, FieldErrors } from 'react-hook-form';
import { InputTextProps } from '../../Element/InputText/types';

export interface InputText01FieldProps
  extends Omit<InputTextProps, 'name' | 'onChange' | 'onBlur'>,
    UseFormRegisterReturn {
  label: string;
  type: string;
  placeholder?: string;
  asterisk: boolean;
  errors?: FieldErrors;
  handleChange?: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => React.ChangeEvent<HTMLInputElement>;
}
