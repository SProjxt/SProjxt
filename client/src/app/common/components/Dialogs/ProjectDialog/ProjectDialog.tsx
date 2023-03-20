import React from 'react';
import Dialog from '../Dialog';
import { useForm } from 'react-hook-form';
import { DialogNameEnum } from '../../../../core/enum/element/dialog';
import InputTextField from '../../Form/Field/InputTextField';
import { ProjectDialogProps, FormValues } from './types';

const ProjectDialog: React.FC<ProjectDialogProps> = (props) => {
  const reactHookForm = useForm<FormValues>({
    defaultValues: {
      projectName: '',
    },
  });
  return (
    <Dialog
      name={DialogNameEnum.ProjectDialog}
      title="Create your project"
      visible={props.visible}
    >
      <form>
        <InputTextField
          label="project name"
          type="text"
          asterisk
          {...reactHookForm.register('projectName')}
        />
      </form>
    </Dialog>
  );
};

export default ProjectDialog;
