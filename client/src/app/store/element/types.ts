import { DialogNameEnum } from '../../core/enum/element/dialog';

export interface ElementState {
  dialogs: DialogsState;
  navigation: NavigationState;
}

export const ELEMENTS_DIALOGS__SET_DIALOG_VISIBLE =
  'ELEMENT_DIALOGS__SET_DIALOG_VISIBLE';

export interface NavigationState {
  menu: string;
}

export interface DialogsState {
  ProjectDialog: DialogState;
}

export interface DialogState<T = DialogDataState> {
  visible: boolean;
  data?: T;
}

export interface DialogDataState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [k: string]: any;
}

export interface SetDialogVisibleAction {
  type: typeof ELEMENTS_DIALOGS__SET_DIALOG_VISIBLE;
  payload: {
    name: DialogNameEnum;
    visible: boolean;
    data?: DialogDataState;
  };
}

export type ElementActions = SetDialogVisibleAction;
