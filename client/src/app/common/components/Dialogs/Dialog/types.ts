import { DialogNameEnum } from '../../../../core/enum/element/dialog';

export interface DialogProps {
  name: DialogNameEnum;
  visible: boolean;
  title: string;
  confirmedAutoClose?: boolean;
  showConfirmBtn?: boolean;
  confirmBtnText?: string;
  icons?: string;
  onClose?: () => void;
  onConfirm?: () => void;
}
