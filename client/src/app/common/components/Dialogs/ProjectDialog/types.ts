import { Card } from '../../../../feature/Feature/Project/types';

export interface ProjectDialogProps {
  visible: boolean;
  onConfirm: (project: Card) => void;
}

export interface FormValues {
  projectName: string;
  state: string;
}
