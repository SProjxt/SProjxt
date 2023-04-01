import { Card } from '../../../../feature/Feature/Project/types';

export interface ProjectDialogProps {
  visible: boolean;
  onConfirm: (project: Card) => void;
}

export interface FormValues {
  projectName: string;
  state: string;
}

export interface Column {
  id: number;
  items: Users[];
}

export interface Users {
  id: number;
  name: string;
  isSelected: boolean;
}
