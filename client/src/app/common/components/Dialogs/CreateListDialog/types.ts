import { List } from '../../../../feature/Feature/Board/types';

export interface CreateListDialogProps {
  visible: boolean;
  data?: List;
  onConfirm: (listName: string, id: number) => void;
}

export interface FormValues {
  listName: string;
}
