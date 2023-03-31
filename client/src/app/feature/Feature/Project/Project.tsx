/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/types';
import { setDialogVisibleAction } from '../../../store/element/action';
import { DialogNameEnum } from '../../../core/enum/element/dialog';
import ProjectDialog from '../../../common/components/Dialogs/ProjectDialog';
import { FiPlus } from 'react-icons/fi';
import { AiFillEdit } from 'react-icons/ai';
import { Card, User } from './types';

const Project: React.FC = () => {
  const dialogState = useSelector((state: RootState) => state.element.dialogs);
  const reduxDispatch = useDispatch();
  const [projectCards, setProjectCards] = useState<Card[]>([
    {
      id: 1,
      projectName: 'project name',
      state: '',
      users: [
        {
          id: 1,
          name: 'SL',
        },
        {
          id: 2,
          name: 'SL',
        },
      ],
    },
  ]);

  const date = new Date();
  const today =
    date.getFullYear() + '-' + `${date.getMonth() + 1}` + '-' + date.getDate();

  const handleClickCreateBtn = () => {
    reduxDispatch(setDialogVisibleAction(DialogNameEnum.ProjectDialog, true));
  };

  const handleCreateProject = (project: Card) => {
    console.log('project', project);
  };

  return (
    <div className="project-container">
      {projectCards.map((card: Card) => (
        <div key={card.id} className="d-flex justify-content-center my-3">
          <div className="project-card">
            <div className="d-flex justify-content-between align-items-center">
              <p>{today}</p>
              <AiFillEdit />
            </div>
            <p className="text-center font-lg">{card.projectName}</p>
            <div className="d-flex justify-content-end">
              {card.users.map((user: User) => (
                <div key={user.id} className="avatar">
                  {user.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
      <div className="d-flex justify-content-center my-3">
        <div className="project-card plus">
          <div
            className="d-flex justify-content-center"
            onClick={handleClickCreateBtn}
          >
            <FiPlus />
          </div>
        </div>
      </div>
      <ProjectDialog
        visible={dialogState.ProjectDialog.visible}
        onConfirm={handleCreateProject}
      />
    </div>
  );
};

export default Project;
