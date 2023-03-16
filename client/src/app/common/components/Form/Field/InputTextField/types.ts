export interface InputTextFieldProps {
  label: string;
  fieldName: string;
  placeholder: string;
  asterisk: boolean;
  handleChange?: () => void;
}
