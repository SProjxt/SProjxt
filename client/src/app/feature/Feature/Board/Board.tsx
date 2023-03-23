import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/types';
import { setDialogVisibleAction } from '../../../store/element/action';
import CreateListDialog from '../../../common/components/Dialogs/CreateListDialog';
import { AiFillEdit } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import { DialogNameEnum } from '../../../core/enum/element/dialog';

const Board: React.FC = () => {
  const dialogState = useSelector((state: RootState) => state.element.dialogs);
  const reduxDispatch = useDispatch();

  const handleClickCreateBtn = () => {
    reduxDispatch(
      setDialogVisibleAction(DialogNameEnum.CreateListDialog, true)
    );
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
        <div className="board-card p-2">
          <div className="d-flex justify-content-around text-uppercase">
            <p>to do</p>
            <div>
              <button className="me-1">
                <MdDelete />
              </button>
              <button className="ms-1">
                <AiFillEdit />
              </button>
            </div>
          </div>
          <div className="card-container mt-2">
            <div className="card my-1">123</div>
            <div className="card my-1">123</div>
            <div className="card my-1">123</div>
            <div className="card my-1">123</div>
            <div className="card my-1">123</div>
          </div>
        </div>
      </div>
      <CreateListDialog visible={dialogState.CreateListDialog.visible} />
    </>
  );
};

export default Board;
