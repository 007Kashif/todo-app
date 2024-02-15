import { postRequest } from "../";

export const postLoginApi = (payload) => postRequest(`/login`, payload);

export const postRegisterApi = (payload) => postRequest(`/register`, payload);
