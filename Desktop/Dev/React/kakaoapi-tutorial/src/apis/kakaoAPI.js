import axios, { AxiosResponse } from 'axios';
import { getConfigure } from './utils';

const kakaoClient = axios.create({
  baseURL: process.env.REACT_APP_KAKAOAPI_HOST,
});

const kakaoLoginClient = axios.create({
  baseURL: `kapi.kakao.com`,
});

const createGetRequest = (url, body) =>
  kakaoClient.get(url, getConfigure('GET')).then((r) => r.data);

const createPostRequest = (url, body) =>
  kakaoLoginClient.post(url, getConfigure('POST')).then((r) => r.data);

export const getKeywordSearchList = async (payload) =>
  await createGetRequest(`/v2/local/search/keyword?query=${payload}`);

export const kakaoLogout = async (payload) =>
  await createPostRequest(`/v1/user/logout`);
