// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable jsx-a11y/click-events-have-key-events */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/types';
import { setDialogVisibleAction } from '../../../store/element/action';
import { DialogNameEnum } from '../../../core/enum/element/dialog';
import ProjectDialog from '../../../common/components/Dialogs/ProjectDialog';
import { FiPlus } from 'react-icons/fi';

const Project: React.FC = () => {
  const dialogState = useSelector((state: RootState) => state.element.dialogs);
  console.log('dialogState', dialogState);
  const reduxDispatch = useDispatch();

  const date = new Date();
  const today =
    date.getFullYear() + '-' + `${date.getMonth() + 1}` + '-' + date.getDate();

  const handleOpenDialog = () => {
    reduxDispatch(setDialogVisibleAction(DialogNameEnum.ProjectDialog, true));
  };

  return (
    <div className="project-container">
      <div className="d-flex justify-content-center my-3">
        <div className="project-card">
          <p className="d-flex justify-content-end">{today}</p>
          <p className="text-center font-lg">project name</p>
          <div className="d-flex justify-content-end">
            <div className="avatar">SL</div>
            <div className="avatar">SL</div>
            <div className="avatar">SL</div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center my-3">
        <div className="project-card">
          <p className="d-flex justify-content-end">{today}</p>
          <p className="text-center font-lg">project name</p>
          <div className="d-flex justify-content-end">
            <div className="avatar">SL</div>
            <div className="avatar">SL</div>
            <div className="avatar">SL</div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center my-3">
        <div className="project-card">
          <p className="d-flex justify-content-end">{today}</p>
          <p className="text-center font-lg">project name</p>
          <div className="d-flex justify-content-end">
            <div className="avatar">SL</div>
            <div className="avatar">SL</div>
            <div className="avatar">SL</div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center my-3">
        <div className="project-card">
          <p className="d-flex justify-content-end">{today}</p>
          <p className="text-center font-lg">project name</p>
          <div className="d-flex justify-content-end">
            <div className="avatar">SL</div>
            <div className="avatar">SL</div>
            <div className="avatar">SL</div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center my-3">
        <div className="project-card">
          <p className="d-flex justify-content-end">{today}</p>
          <p className="text-center font-lg">project name</p>
          <div className="d-flex justify-content-end">
            <div className="avatar">SL</div>
            <div className="avatar">SL</div>
            <div className="avatar">SL</div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center my-3">
        <div className="project-card">
          <p className="d-flex justify-content-end">{today}</p>
          <p className="text-center font-lg">project name</p>
          <div className="d-flex justify-content-end">
            <div className="avatar">SL</div>
            <div className="avatar">SL</div>
            <div className="avatar">SL</div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center my-3">
        <div className="project-card">
          <p className="d-flex justify-content-end">{today}</p>
          <p className="text-center font-lg">project name</p>
          <div className="d-flex justify-content-end">
            <div className="avatar">SL</div>
            <div className="avatar">SL</div>
            <div className="avatar">SL</div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center my-3">
        <div className="project-card">
          <div
            className="d-flex justify-content-center"
            onClick={handleOpenDialog}
          >
            <FiPlus />
          </div>
        </div>
      </div>
      <ProjectDialog visible={dialogState.ProjectDialog.visible} />
    </div>
  );
};

export default Project;
