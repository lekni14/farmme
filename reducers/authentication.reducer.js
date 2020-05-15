import { AUTHENTICATE, DEAUTHENTICATE, USER } from '../utils/constants';

const initialState = {
  token: null,
  user: null,
};

export function authentication (state = initialState, action) {
  console.log(action.type)
  switch (action.type) {
    case AUTHENTICATE:
      return Object.assign({}, state, { token: action.payload });
    case USER:
      return Object.assign({}, state, { user: action.payload });
    case DEAUTHENTICATE:
      return { token: null };
    default:
      return state;
  }
};