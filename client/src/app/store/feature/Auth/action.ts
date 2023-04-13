import { PostAuthAuthenticateReq } from '../../../api/models/post/postAuthAuthenticate';
import { PostCreateUserReq } from '../../../api/models/post/postCreateUser';
import { AuthActions, REGISTER__USERS, LOGIN__USERS } from './types';

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
