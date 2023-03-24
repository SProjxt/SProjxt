import React, { useEffect } from 'react';
import Dialog from '../Dialog';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { DialogNameEnum } from '../../../../core/enum/element/dialog';
import InputTextField from '../../Form/Field/InputTextField';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { setDialogVisibleAction } from '../../../../store/element/action';
import { CreateListDialogProps, FormValues } from './types';

const CreateListDialog: React.FC<CreateListDialogProps> = (props) => {
  const reduxDispatch = useDispatch();

  const schema = yup.object().shape({
    listName: yup.string().required(),
  });
  const reactHookForm = useForm<FormValues>({
    defaultValues: {
      listName: '',
    },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    /** @ts-ignore */
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    reactHookForm.setValue('listName', props.data?.name ?? '');
  }, [reactHookForm, props.data]);

  const handleFormSubmit = reactHookForm.handleSubmit((formValues) => {
    props.onConfirm(formValues.listName, props.data?.id ?? 0);
    reduxDispatch(
      setDialogVisibleAction(DialogNameEnum.CreateListDialog, false)
    );
    reactHookForm.reset();
  });

  const handleConfirm = () => {
    handleFormSubmit();
  };
  return (
    <Dialog
      name={DialogNameEnum.CreateListDialog}
      title="Create a List?"
      visible={props.visible}
      onConfirm={handleConfirm}
    >
      <form className="d-flex justify-content-center">
        <div className="w-80">
          <InputTextField
            label="name"
            type="text"
            asterisk
            {...reactHookForm.register('listName')}
            errors={reactHookForm.formState.errors}
          />
        </div>
      </form>
    </Dialog>
  );
};

export default CreateListDialog;
