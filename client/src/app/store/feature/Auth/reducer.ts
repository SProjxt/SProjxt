import { Reducer } from 'redux';
import storageService from '../../../core/service/storageService';
import { StorageKeysEnum } from '../../../core/enum/storage';
import { AuthState, AuthActions, SAVE_USER_AUTHORIZATION } from './types';

const initialState: AuthState = {
  token: storageService.getItem(StorageKeysEnum.Authorization) ?? '',
};

const authReducer: Reducer<AuthState, AuthActions> = (
  state = initialState,
  action
): AuthState => {
  switch (action.type) {
    case SAVE_USER_AUTHORIZATION: {
      return { ...state, token: action.payload.args.token };
    }
    default:
      return state;
  }
};

export default authReducer;
