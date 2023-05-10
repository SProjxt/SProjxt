import {
  PostAuthAuthenticateReq,
  PostAuthAuthenticateResp,
} from '../../../api/models/post/postAuthAuthenticate';
import { PostCreateUserReq } from '../../../api/models/post/postCreateUser';
import {
  AuthActions,
  REGISTER__USERS,
  LOGIN__USERS,
  SAVE_USER_AUTHORIZATION,
  ExecuteSaveAuthorizationAction,
} from './types';

export const executeRegisterAction = (
  args: PostCreateUserReq
): AuthActions => ({
  type: REGISTER__USERS,
  payload: { args },
});

export const executeLoginAction = (
  args: PostAuthAuthenticateReq
): AuthActions => ({
  type: LOGIN__USERS,
  payload: { args },
});

export const executeSaveAuthorizationAction = (
  args: PostAuthAuthenticateResp
): ExecuteSaveAuthorizationAction => ({
  type: SAVE_USER_AUTHORIZATION,
  payload: { args },
});
