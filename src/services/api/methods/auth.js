import { getRequest, postRequest, putRequest, deleteRequest } from "../";

// Auth Api's
export const postLoginApi = (payload) => postRequest(`/login`, payload);
export const postRegisterApi = (payload) => postRequest(`/register`, payload);

//Item Api's
export const deleteItemApi = (id) => deleteRequest(`/item/${id}`);
export const getListApi = (page) => getRequest(`/items?page=${page}`);
export const createItemApi = (payload) => postRequest(`/item`, payload);
export const updateItemApi = (id, payload) => putRequest(`/item/${id}`, payload);


