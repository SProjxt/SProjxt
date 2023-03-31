import React from 'react';
import Dialog from '../Dialog';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { DialogNameEnum } from '../../../../core/enum/element/dialog';
import InputTextField from '../../Form/Field/InputTextField';
import SelectField from '../../Form/Field/SelectField';
import { ProjectDialogProps, FormValues } from './types';

const ProjectDialog: React.FC<ProjectDialogProps> = (props) => {
  const schema = yup.object().shape({
    projectName: yup.string().required(),
    state: yup.string().required(),
  });
  const reactHookForm = useForm<FormValues>({
    defaultValues: {
      projectName: '',
      state: '',
    },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    /** @ts-ignore */
    resolver: yupResolver(schema),
  });
  const handleFormSubmit = reactHookForm.handleSubmit((formValues) => {
    props.onConfirm({ ...formValues, id: 0, users: [] });
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
          errors={reactHookForm.formState.errors}
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
          errors={reactHookForm.formState.errors}
        />
        <div className="user-container my-2">
          <div className="row h-100 p-3">
            <div className="col-6">
              <div className="d-flex align-items-center my-1">
                <div className="avatar me-3" />
                <p>Username</p>
              </div>
              <div className="d-flex align-items-center my-1">
                <div className="avatar me-3" />
                <p>Username</p>
              </div>
            </div>
            <div className="col-6 vertical-line">
              <div className="d-flex align-items-center my-1">
                <div className="avatar me-3" />
                <p>Username</p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Dialog>
  );
};

export default ProjectDialog;
