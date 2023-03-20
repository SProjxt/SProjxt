// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable jsx-a11y/no-static-element-interactions */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setDialogVisibleAction } from '../../../../store/element/action';
import { DialogProps } from './types';

const Dialog: React.FC<DialogProps> = (props) => {
  const dialogContainerElemRef = useRef<HTMLDivElement>(null);
  const reduxDispatch = useDispatch();

  const handleCloseDialog = () => {
    if (props.onClose) return props.onClose();
    reduxDispatch(setDialogVisibleAction(props.name, false));
  };

  const handleConfirmDialog = () => {
    if (props.onConfirm) return props.onConfirm();
    if (props.confirmedAutoClose) handleCloseDialog();
  };

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target !== dialogContainerElemRef.current) handleCloseDialog();
  };

  return (
    <div
      id={props.name}
      className={'dialog' + (props.visible ? '-visible' : '')}
    >
      <div className="dialog-container" ref={dialogContainerElemRef}>
        <div className="dialog-head">
          <div className="dilog-title">
            <h3 className="text-center">{props.title}</h3>
          </div>
        </div>
        <div className="dialog-content">{props.children}</div>
        <div className="dialog-footer">
          {props.showConfirmBtn && (
            <button
              type="button"
              className="btn-main"
              onClick={handleConfirmDialog}
            >
              {props.confirmBtnText}
            </button>
          )}
        </div>
      </div>
      <div className="dialog-backdrop" onClick={handleBackdropClick} />
    </div>
  );
};

Dialog.defaultProps = {
  confirmedAutoClose: true,
  showConfirmBtn: true,
  confirmBtnText: 'Confirm',
};

export default Dialog;
