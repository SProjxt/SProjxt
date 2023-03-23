export interface WarningDialogProps {
  visible: boolean;
  content: string;
  onConfirm?: () => void;
}
