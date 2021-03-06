import { userConstants } from '../utils/constants';
import { getCookie } from '../utils/cookie';


let initialState;
if (typeof localStorage !== "undefined") {
  const authCookie = getCookie('token');
  if (authCookie) {
    initialState = {
      token: authCookie,
      user: getCookie('user') !== undefined ? JSON.parse(getCookie('user')) : {},
      isLoggedIn: true,
    };
  } else {
    initialState = {
      token: null,
      isLoggedIn: false,
      user: {}
    }
  }
} else {
  initialState = {
    isLoggedIn: false,
    user: {}
  };
  console.log(initialState)
}

export function authentication(state = initialState, action) {
  console.log(action)
  console.log(action.data)
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        isLoggedIn: false,
        token: action.data,
        isShowLogin: false
      }
    case userConstants.LOGIN_SUCCESS:
      return {
        isLoggedIn: true,
        token: action.data,
        isShowLogin: false
      }
    case userConstants.LOGIN_FAILURE:
      return {
      }
    case userConstants.LOGOUT:

      return {
        isLoggedIn: false,
        isShowLogin: false
      }
    case userConstants.SHOW_LOGIN:
      return {
        isLoggedIn: false,
        isShowLogin: true
      }
    case userConstants.CLOSE_LOGIN:
      return {
        isLoggedIn: false,
        isShowLogin: false
      }
    case userConstants.ME_REQUEST:
      return {
      }
    case userConstants.ME_FAILURE:
      return {
      }
    case userConstants.ME_SUCCESS:
      return {
        isLoggedIn: true,
        user: action.data,
        showLogin: false
      }
    case userConstants.PROFILE_UPDATE_REQUEST:
      return {
      }
    case userConstants.PROFILE_UPDATE_FAILURE:
      return {
      }
    case userConstants.PROFILE_UPDATE_SUCCESS:
      return {
        user: action.data
      }
    default:
      console.log(state)
      return state
  }
  // console.log(action.type)
  // switch (action.type) {
  //   case AUTHENTICATE:
  //     return Object.assign({}, state, { token: action.payload });
  //   case USER:
  //     return Object.assign({}, state, { user: action.payload });
  //   case DEAUTHENTICATE:
  //     return { token: null };
  //   default:
  //     return state;
  // }
};