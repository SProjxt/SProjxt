import React from 'react';
import Dialog from '../Dialog';
import { DialogNameEnum } from '../../../../core/enum/element/dialog';
import { IconTypeValueEnum } from '../../../../core/enum/element/icon';
import { WarningDialogProps } from './types';

const WarningDialog: React.FC<WarningDialogProps> = (props) => {
  return (
    <Dialog
      name={DialogNameEnum.WarningDialog}
      visible={props.visible}
      icon={IconTypeValueEnum.Warning}
      showCancelBtn={false}
      onConfirm={props.onConfirm}
    >
      <p className="text-center">{props.content}</p>
    </Dialog>
  );
};

export default WarningDialog;
