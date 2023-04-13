import { PostAuthAuthenticateReq } from '../../../api/models/post/postAuthAuthenticate';
import { PostCreateUserReq } from '../../../api/models/post/postCreateUser';

export interface AuthState {
  token: string;
}

export const LOGIN__USERS = 'LOGIN__USERS';
export const REGISTER__USERS = 'REGISTER__USERS';

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

export type AuthActions = ExecuteLoginAction | ExecuteRegisterAction;
