import {
  PostAuthAuthenticateReq,
  PostAuthAuthenticateResp,
} from '../../../api/models/post/postAuthAuthenticate';
import { PostCreateUserReq } from '../../../api/models/post/postCreateUser';

export interface AuthState {
  token: string;
}

export const LOGIN__USERS = 'LOGIN__USERS';
export const REGISTER__USERS = 'REGISTER__USERS';
export const SAVE_USER_AUTHORIZATION = 'SAVE_USER_AUTHORIZATION';

export interface ExecuteRegisterAction {
  type: typeof REGISTER__USERS;
  payload: {
    args: PostCreateUserReq;
  };
}

export interface ExecuteLoginAction {
  type: typeof LOGIN__USERS;
  payload: {
    args: PostAuthAuthenticateReq;
  };
}

export interface ExecuteSaveAuthorizationAction {
  type: typeof SAVE_USER_AUTHORIZATION;
  payload: {
    args: PostAuthAuthenticateResp;
  };
}

export type AuthActions =
  | ExecuteLoginAction
  | ExecuteRegisterAction
  | ExecuteSaveAuthorizationAction;
