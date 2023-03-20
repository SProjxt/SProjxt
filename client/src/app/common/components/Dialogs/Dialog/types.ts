import { DialogNameEnum } from '../../../../core/enum/element/dialog';

export interface DialogProps {
  name: DialogNameEnum;
  visible: boolean;
  title: string;
  confirmedAutoClose?: boolean;
  showConfirmBtn?: boolean;
  showCancelBtn?: boolean;
  confirmBtnText?: string;
  cancelBtnText?: string;
  icons?: string;
  onClose?: () => void;
  onConfirm?: () => void;
}
