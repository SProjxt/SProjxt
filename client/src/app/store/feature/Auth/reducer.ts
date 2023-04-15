import { Reducer } from 'redux';
import storageService from '../../../core/service/storageService';
import { StorageKeysEnum } from '../../../core/enum/storage';
import { AuthState, AuthActions } from './types';

const initialState: AuthState = {
  token: storageService.getItem(StorageKeysEnum.Authorization) ?? '',
};

const authReducer: Reducer<AuthState, AuthActions> = (
  state = initialState,
  action
): AuthState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default authReducer;
