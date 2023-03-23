import React from 'react';
import Dialog from '../Dialog';
import { useForm } from 'react-hook-form';
import { DialogNameEnum } from '../../../../core/enum/element/dialog';
import InputTextField from '../../Form/Field/InputTextField';
import { CreateListDialogProps, FormValues } from './types';

const CreateListDialog: React.FC<CreateListDialogProps> = (props) => {
  const reactHookForm = useForm<FormValues>({
    defaultValues: {
      listName: '',
    },
  });
  return (
    <Dialog
      name={DialogNameEnum.CreateListDialog}
      title="Create a List?"
      visible={props.visible}
    >
      <form className="d-flex justify-content-center">
        <div className="w-80">
          <InputTextField
            label="name"
            type="text"
            asterisk
            {...reactHookForm.register('listName')}
          />
        </div>
      </form>
    </Dialog>
  );
};

export default CreateListDialog;
