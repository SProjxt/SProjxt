import { ControllerRenderProps, FieldValues } from 'react-hook-form';

export interface InputTextProps {
  field: ControllerRenderProps<FieldValues, string>;
  placeholder: string;
  handleChange?: () => void;
}
