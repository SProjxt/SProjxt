import React, { useState } from 'react';
import Dialog from '../Dialog';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { DialogNameEnum } from '../../../../core/enum/element/dialog';
import InputTextField from '../../Form/Field/InputTextField';
import SelectField from '../../Form/Field/SelectField';
import { ProjectDialogProps, FormValues, Users } from './types';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const ProjectDialog: React.FC<ProjectDialogProps> = (props) => {
  const schema = yup.object().shape({
    projectName: yup.string().required(),
    state: yup.string().required(),
  });

  const [users, setUsers] = useState<Users[]>([
    {
      id: 1,
      name: 'Steven',
      isSelected: false,
    },
    {
      id: 2,
      name: 'Ben',
      isSelected: false,
    },
    {
      id: 3,
      name: 'Micheal',
      isSelected: false,
    },
    {
      id: 4,
      name: 'Weng',
      isSelected: true,
    },
    {
      id: 5,
      name: 'Sharon',
      isSelected: true,
    },
    {
      id: 6,
      name: 'Vicky',
      isSelected: true,
    },
  ]);

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
          <DragDropContext onDragEnd={() => console.log(123)}>
            <div className="row h-100 p-3">
              <div className="col-6">
                <Droppable droppableId="1">
                  {(droppableProvided) => (
                    <div
                      ref={droppableProvided.innerRef}
                      {...droppableProvided.droppableProps}
                    >
                      {users.map((user) => {
                        if (!user.isSelected) {
                          return (
                            <Draggable
                              key={user.id}
                              draggableId={`${user.id}`}
                              index={user.id}
                            >
                              {(draggableProvided, draggableSnapshot) => (
                                <div
                                  className={
                                    'd-flex align-items-center user-item my-2 ' +
                                    (draggableSnapshot.isDragging
                                      ? 'isDragging'
                                      : '')
                                  }
                                  ref={draggableProvided.innerRef}
                                  {...draggableProvided.draggableProps}
                                  {...draggableProvided.dragHandleProps}
                                >
                                  <div className="avatar me-3" />
                                  <p>{user.name}</p>
                                </div>
                              )}
                            </Draggable>
                          );
                        }
                      })}
                    </div>
                  )}
                </Droppable>
              </div>
              <div className="col-6 vertical-line">
                <Droppable droppableId="2">
                  {(droppableProvided) => (
                    <div
                      ref={droppableProvided.innerRef}
                      {...droppableProvided.droppableProps}
                    >
                      {users.map((user) => {
                        if (user.isSelected) {
                          return (
                            <Draggable
                              key={user.id}
                              draggableId={`${user.id}`}
                              index={user.id}
                            >
                              {(draggableProvided, draggableSnapshot) => (
                                <div
                                  className={
                                    'd-flex align-items-center user-item my-2 ' +
                                    (draggableSnapshot.isDragging
                                      ? 'isDragging'
                                      : '')
                                  }
                                  ref={draggableProvided.innerRef}
                                  {...draggableProvided.draggableProps}
                                  {...draggableProvided.dragHandleProps}
                                >
                                  <div className="avatar me-3" />
                                  <p>{user.name}</p>
                                </div>
                              )}
                            </Draggable>
                          );
                        }
                      })}
                    </div>
                  )}
                </Droppable>
              </div>
            </div>
          </DragDropContext>
        </div>
      </form>
    </Dialog>
  );
};

export default ProjectDialog;
