import axios from 'axios';
import {
  PostCreateUserReq,
  PostCreateUserResp,
} from '../models/post/postCreateUser';
import {
  PostAuthAuthenticateReq,
  PostAuthAuthenticateResp,
} from '../models/post/postAuthAuthenticate';

export default {
  postCreateUser: async (args: PostCreateUserReq) => {
    return axios
      .post<PostCreateUserResp>('/createUser', args)
      .then((response) => response.data);
  },
  postAuthAuthenticate: async (args: PostAuthAuthenticateReq) => {
    return axios
      .post<PostAuthAuthenticateResp>('/auth/authenticate', args)
      .then((response) => response.data);
  },
};
