import React from 'react';
import Dialog from '../Dialog';
import { DialogNameEnum } from '../../../../core/enum/element/dialog';
import { ProjectDialogProps } from './types';

const ProjectDialog: React.FC<ProjectDialogProps> = (props) => {
  return (
    <Dialog
      name={DialogNameEnum.ProjectDialog}
      title="Create your project"
      visible={props.visible}
    >
      <p>test</p>
    </Dialog>
  );
};

export default ProjectDialog;
