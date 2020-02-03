import { createStore } from 'redux';
import { SET_LOGIN_STATE, RESET_STATE } from './constants/action-types';
import setLoginState from './actions';

const INITIAL_STATE = {
      loginState: ""
}
function reducer(state = INITIAL_STATE, action) {
  if(action.type === SET_LOGIN_STATE) {
  return { ...state }
  } else if (action.type === RESET_STATE) {
    return { ...state };
  }
  return state
}


const store = createStore(reducer);

export default store;
