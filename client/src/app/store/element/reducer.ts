import { Reducer } from 'redux';
import {
  ElementState,
  ELEMENTS_DIALOGS__SET_DIALOG_VISIBLE,
  ElementActions,
} from './types';

const initialState: ElementState = {
  dialogs: {
    ProjectDialog: {
      visible: false,
    },
    CreateListDialog: {
      visible: false,
    },
  },
  navigation: {
    menu: '',
  },
};

const elementReducer: Reducer<ElementState, ElementActions> = (
  state = initialState,
  action
): ElementState => {
  switch (action.type) {
    case ELEMENTS_DIALOGS__SET_DIALOG_VISIBLE: {
      const targetDialogState = { ...state.dialogs[action.payload.name] };
      targetDialogState.visible = action.payload.visible;
      targetDialogState.data = action.payload.visible
        ? action.payload.data
        : undefined;
      return {
        ...state,
        dialogs: { ...state.dialogs, [action.payload.name]: targetDialogState },
      };
    }
    default:
      return state;
  }
};

export default elementReducer;
