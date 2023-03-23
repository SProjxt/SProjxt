import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/types';
import { setDialogVisibleAction } from '../../../store/element/action';
import { AiFillEdit } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import { DialogNameEnum } from '../../../core/enum/element/dialog';
import { ExecutionActionValueEnum } from '../../../core/enum/common';
import { List, Card } from './types';
import CreateListDialog from '../../../common/components/Dialogs/CreateListDialog';
import WarningDialog from '../../../common/components/Dialogs/WarningDialog';

const Board: React.FC = () => {
  const dialogState = useSelector((state: RootState) => state.element.dialogs);
  const dialogType = useRef<ExecutionActionValueEnum>();
  const reduxDispatch = useDispatch();
  const [currentBoard, setCurrentBoard] = useState<List[]>([
    {
      id: 1,
      name: 'list',
      cards: [
        {
          id: 1,
          name: 'card name',
          owner: 'Steven',
        },
      ],
    },
  ]);
  const [selectedList, setSelectedList] = useState<List>();

  const handleClickCreateBtn = () => {
    dialogType.current = ExecutionActionValueEnum.Create;
    reduxDispatch(
      setDialogVisibleAction(DialogNameEnum.CreateListDialog, true)
    );
  };

  const handleClickEditBtn = (list: List) => {
    dialogType.current = ExecutionActionValueEnum.Edit;
    setSelectedList(list);
    reduxDispatch(
      setDialogVisibleAction(DialogNameEnum.CreateListDialog, true)
    );
  };

  const handleClickDeleteBtn = (list: List) => {
    setSelectedList(list);
    reduxDispatch(setDialogVisibleAction(DialogNameEnum.WarningDialog, true));
  };

  const handleDeleteList = () => {
    const currentBoardUpdated = currentBoard.filter(
      (item) => item.id !== selectedList?.id
    );
    setCurrentBoard(currentBoardUpdated);
    reduxDispatch(setDialogVisibleAction(DialogNameEnum.WarningDialog, false));
  };

  const handleCreateOrEditList = (listName: string, id: number) => {
    switch (dialogType.current) {
      case ExecutionActionValueEnum.Create: {
        setCurrentBoard((prevBoard) => [
          ...prevBoard,
          {
            id: prevBoard.length + 1,
            name: listName,
            cards: [],
          },
        ]);
        break;
      }
      case ExecutionActionValueEnum.Edit: {
        const currentBoardUpdated = currentBoard.map((item: List) => {
          if (item.id !== id) {
            return { ...item };
          } else {
            return { ...item, name: listName };
          }
        });
        setCurrentBoard(currentBoardUpdated);
        break;
      }
    }
  };

  return (
    <>
      <button
        type="button"
        className="btn-main text-center mb-3"
        onClick={handleClickCreateBtn}
      >
        create
      </button>
      <div className="board-container">
        {currentBoard.length !== 0 &&
          currentBoard.map((list: List) => {
            return (
              <div key={list.id} className="board-card p-2">
                <div className="d-flex justify-content-around text-uppercase">
                  <p>{list.name}</p>
                  <div>
                    <button
                      type="button"
                      className="me-1"
                      onClick={() => handleClickDeleteBtn(list)}
                    >
                      <MdDelete />
                    </button>
                    <button
                      type="button"
                      className="ms-1"
                      onClick={() => handleClickEditBtn(list)}
                    >
                      <AiFillEdit />
                    </button>
                  </div>
                </div>
                <div className="card-container mt-2">
                  {list.cards.map((card: Card) => (
                    <div key={card.id} className="card my-1">
                      {card.name}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
      </div>
      <CreateListDialog
        visible={dialogState.CreateListDialog.visible}
        data={selectedList}
        onConfirm={handleCreateOrEditList}
      />
      <WarningDialog
        visible={dialogState.WarningDialog.visible}
        content="Do you want to delete this list?"
        onConfirm={handleDeleteList}
      />
    </>
  );
};

export default Board;
