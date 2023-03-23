import { DialogNameEnum } from '../../../../core/enum/element/dialog';
import { IconTypeValueEnum } from '../../../../core/enum/element/icon';

export interface DialogProps {
  name: DialogNameEnum;
  visible: boolean;
  title?: string;
  confirmedAutoClose?: boolean;
  showConfirmBtn?: boolean;
  showCancelBtn?: boolean;
  confirmBtnText?: string;
  cancelBtnText?: string;
  icon?: IconTypeValueEnum;
  onClose?: () => void;
  onConfirm?: () => void;
}
