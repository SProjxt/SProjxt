import apiService from '../../../api/service/apiService';
import storageService from '../../../core/service/storageService';
import { StorageKeysEnum } from '../../../core/enum/storage';
import { PostAuthAuthenticateResp } from '../../../api/models/post/postAuthAuthenticate';
import { PostCreateUserResp } from '../../../api/models/post/postCreateUser';
import { takeEvery, all, call, put } from 'redux-saga/effects';
import {
  LOGIN__USERS,
  REGISTER__USERS,
  ExecuteRegisterAction,
  ExecuteLoginAction,
} from './types';
import { sagaBoundary } from '../../service';
import { executeSaveAuthorizationAction } from './action';

function* executeRegister(action: ExecuteRegisterAction) {
  const response: PostCreateUserResp = yield call(
    apiService.postCreateUser,
    action.payload.args
  );
  console.log('response', response);
}

function* executeLogin(action: ExecuteLoginAction) {
  const response: PostAuthAuthenticateResp = yield call(
    apiService.postAuthAuthenticate,
    action.payload.args
  );
  if (response) {
    yield put(
      executeSaveAuthorizationAction({
        token: response.token,
      })
    );
    storageService.setItem(StorageKeysEnum.Authorization, response.token);
  }
}

export default function* watchAuthSaga() {
  yield all([
    takeEvery(REGISTER__USERS, sagaBoundary(executeRegister)),
    takeEvery(LOGIN__USERS, sagaBoundary(executeLogin)),
  ]);
}
