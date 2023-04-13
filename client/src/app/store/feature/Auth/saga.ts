import apiService from '../../../api/service/apiService';
import storageService from '../../../core/service/storageService';
import { StorageKeysEnum } from '../../../core/enum/storage';
import { PostAuthAuthenticateResp } from '../../../api/models/post/postAuthAuthenticate';
import { PostCreateUserResp } from '../../../api/models/post/postCreateUser';
import { takeEvery, all, call } from 'redux-saga/effects';
import {
  LOGIN__USERS,
  REGISTER__USERS,
  ExecuteRegisterAction,
  ExecuteLoginAction,
} from './types';
import { sagaBoundary } from '../../service';

function* executeRegister(action: ExecuteRegisterAction) {
  const response: PostCreateUserResp = yield call(
    apiService.postCreateUser,
    action.payload.args
  );
  console.log('response', response);
}

function* executeLogin(action: ExecuteLoginAction) {
  console.log('action', action.payload.args);
  const response: PostAuthAuthenticateResp = yield call(
    apiService.postAuthAuthenticate,
    action.payload.args
  );
  if (response) {
    storageService.setItem(StorageKeysEnum.Authorization, response.token);
  }
  console.log('response', response);
}

export default function* watchAuthSaga() {
  yield all([
    takeEvery(REGISTER__USERS, sagaBoundary(executeRegister)),
    takeEvery(LOGIN__USERS, sagaBoundary(executeLogin)),
  ]);
}
