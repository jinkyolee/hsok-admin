const BASE_URL =
  "http://ec2-13-124-106-144.ap-northeast-2.compute.amazonaws.com";

export const LOGIN_URL = `${BASE_URL}/user/stores/sign-in/`;

export const SIGNUP_URL = `${BASE_URL}/user/stores/sign-up/`;

export const REQUESTS_URL = (state, pk) =>
  `${BASE_URL}/requests/${pk}/${state}-requests/`;
