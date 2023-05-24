/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/types';
import apiService from '../../../api/service/apiService';
import { setDialogVisibleAction } from '../../../store/element/action';
import { DialogNameEnum } from '../../../core/enum/element/dialog';
import ProjectDialog from '../../../common/components/Dialogs/ProjectDialog';
import { ProjectCard } from '../../../api/models/post/postShowProjects';
import { FiPlus } from 'react-icons/fi';
import { FaTrash } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';

const Project: React.FC = () => {
  const [projectCards, setProjectCards] = useState<ProjectCard[]>([]);
  useEffect(() => {
    (async () => {
      const response = await apiService.postShowProjects({});
      setProjectCards(response.projectList);
    })();
  }, []);
  const dialogState = useSelector((state: RootState) => state.element.dialogs);
  const reduxDispatch = useDispatch();

  const date = new Date();
  const today =
    date.getFullYear() + '-' + `${date.getMonth() + 1}` + '-' + date.getDate();

  const handleClickCreateBtn = () => {
    reduxDispatch(setDialogVisibleAction(DialogNameEnum.ProjectDialog, true));
  };

  const handleCreateProject = (string: any) => {
    console.log('string', string);
  };

  return (
    <div className="project-container">
      {projectCards.map((card) => (
        <div
          key={card.projectName}
          className="d-flex justify-content-center my-3"
        >
          <div className="project-card">
            <div className="d-flex justify-content-between align-items-center">
              <p>{today}</p>
              <div className="d-flex">
                <div className="mx-1">
                  <AiFillEdit />
                </div>
                <div className="mx-1">
                  <FaTrash />
                </div>
              </div>
            </div>
            <p className="text-center font-lg">{card.projectName}</p>
            <div className="d-flex justify-content-end">
              {card.members.map((user) => (
                <div key={user} className="avatar">
                  <p>{user[0]}</p>
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
