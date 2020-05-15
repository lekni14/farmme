export const API_URL = 'http://localhost:3006/api/v1'
export const IMAGE_URL = 'http://localhost:3006'
//UAT
// export const API_URL = 'http://farmme.in.th:3006/api/v1'
// export const IMAGE_URL = 'http://farmme.in.th:3006'

//PD
// export const API_URL = 'https://runex.co:3006/api/v1'
// export const IMAGE_URL = 'https://runex.co:3006'

export const HEADER = { headers: { 'Content-Type': 'application/json' } }
export const PF = 'web'
export const GA_ID = 'G-LC572RKD9Z'
//Omise test key = pkey_test_5i6ivm4cotoab601bfr
//Omise Production key = pkey_5i1p3nkjgq6vrrrfhkp
export const REGISTER = 'register';
export const AUTHENTICATE = 'authenticate';
export const DEAUTHENTICATE = 'deauthenticate';
export const USER = 'user';

export const alertConstants = {
  SUCCESS: 'ALERT_SUCCESS',
  ERROR: 'ALERT_ERROR',
  CLEAR: 'ALERT_CLEAR',
  LOADING: 'ALERT_LOADING',
}

export const userConstants = {
  PROFILE_UPDATE_REQUEST: 'PROFILE_UPDATE_REQUEST',
  PROFILE_UPDATE_SUCCESS: 'PROFILE_UPDATE_SUCCESS',
  PROFILE_UPDATE_FAILURE: 'PROFILE_UPDATE_FAILURE',

  ADD_ADDRESS_REQUEST: 'ADD_ADDRESS_REQUEST',
  ADD_ADDRESS_SUCCESS: 'ADD_ADDRESS_SUCCESS',
  ADD_ADDRESS_FAILURE: 'ADD_ADDRESS_FAILURE',

  REGISTER_REQUEST: 'USERS_REGISTER_REQUEST',
  REGISTER_SUCCESS: 'USERS_REGISTER_SUCCESS',
  REGISTER_FAILURE: 'USERS_REGISTER_FAILURE',

  LOGIN_REQUEST: 'USERS_LOGIN_REQUEST',
  LOGIN_SUCCESS: 'USERS_LOGIN_SUCCESS',
  LOGIN_FAILURE: 'USERS_LOGIN_FAILURE',

  ME_REQUEST: 'USERS_GET_REQUEST',
  ME_SUCCESS: 'USERS_GET_SUCCESS',
  ME_FAILURE: 'USERS_GET_FAILURE',

  LOGOUT: 'USERS_LOGOUT',
  SHOW_LOGIN: 'SHOW_LOGIN',
  CLOSE_LOGIN: 'CLOSE_LOGIN',

  GETALL_REQUEST: 'USERS_GETALL_REQUEST',
  GETALL_SUCCESS: 'USERS_GETALL_SUCCESS',
  GETALL_FAILURE: 'USERS_GETALL_FAILURE',

  DELETE_REQUEST: 'USERS_DELETE_REQUEST',
  DELETE_SUCCESS: 'USERS_DELETE_SUCCESS',
  DELETE_FAILURE: 'USERS_DELETE_FAILURE',

}
