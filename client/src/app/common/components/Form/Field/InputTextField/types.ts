export interface InputTextFieldProps {
  label: string;
  type: string;
  fieldName: string;
  placeholder: string;
  asterisk: boolean;
  handleChange?: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => React.ChangeEvent<HTMLInputElement>;
}
