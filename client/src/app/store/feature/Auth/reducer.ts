import { Reducer } from 'redux';
import storageService from '../../../core/service/storageService';
import { StorageKeysEnum } from '../../../core/enum/storage';
import { AuthState, AuthActions } from './types';

const initialState: AuthState = () => {
  if (storageService.getItem(StorageKeysEnum.Authorization)) {
    return {
      token:
        JSON.parse(storageService.getItem(StorageKeysEnum.Authorization)) ?? '',
    };
  } else {
    return {
      token: '',
    };
  }
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
