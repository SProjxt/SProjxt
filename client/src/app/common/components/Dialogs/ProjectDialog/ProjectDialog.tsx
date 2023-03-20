import React from 'react';
import Dialog from '../Dialog';
import { useForm } from 'react-hook-form';
import { DialogNameEnum } from '../../../../core/enum/element/dialog';
import InputTextField from '../../Form/Field/InputTextField';
import SelectField from '../../Form/Field/SelectField';
import { ProjectDialogProps, FormValues } from './types';

const ProjectDialog: React.FC<ProjectDialogProps> = (props) => {
  const reactHookForm = useForm<FormValues>({
    defaultValues: {
      projectName: '',
      state: '',
    },
  });
  const handleFormSubmit = reactHookForm.handleSubmit((formValues) => {
    console.log('formValues', formValues);
  });
  const handleConfirm = () => {
    handleFormSubmit();
  };
  return (
    <Dialog
      name={DialogNameEnum.ProjectDialog}
      title="Create your project"
      visible={props.visible}
      onConfirm={handleConfirm}
    >
      <form>
        <InputTextField
          label="project name"
          type="text"
          asterisk
          {...reactHookForm.register('projectName')}
        />
        <SelectField
          label="state"
          options={[
            {
              text: 'test1',
              value: 'text1',
            },
            {
              text: 'test2',
              value: 'text2',
            },
          ]}
          asterisk
          {...reactHookForm.register('state')}
        />
      </form>
    </Dialog>
  );
};

export default ProjectDialog;
