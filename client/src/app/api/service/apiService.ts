import axios from 'axios';
import {
  PostCreateUserReq,
  PostCreateUserResp,
} from '../models/post/postCreateUser';
import {
  PostAuthAuthenticateReq,
  PostAuthAuthenticateResp,
} from '../models/post/postAuthAuthenticate';
import {
  PostShowProjectsReq,
  PostShowProjectsResp,
} from '../models/post/postShowProjects';
import { PostAllUsersReq, PostAllUsersResp } from '../models/post/postAllUsers';

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
  postShowProjects: async (args: PostShowProjectsReq) => {
    return axios
      .post<PostShowProjectsResp>('/showProjects', args)
      .then((response) => response.data);
  },
  postAllUsers: async (args: PostAllUsersReq) => {
    return axios
      .post<PostAllUsersResp>('/allUsers', args)
      .then((response) => response.data);
  },
};
