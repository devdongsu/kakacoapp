import axios, { AxiosResponse } from 'axios';
import { getConfigure } from './utils';

// 인가요청, 토큰요청
const kakaoLoginClient = axios.create({
  baseURL: `kauth.kakao.com`,
});

// 로그아웃 요청
const kakaoLogoutClient = axios.create({
  baseURL: `kapi.kakao.com`,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('AccessToken')}`,
  },
});

const createGetRequest = (url, body) =>
  kakaoLoginClient.get(url, getConfigure('GET')).then((r) => r.data);

const KAKAO_AUTH_URL = `/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=http://localhost:3000/oauth/callback&response_type=code`;

export const getKakaoAccessToken = async (payload) =>
  await createGetRequest(KAKAO_AUTH_URL);
