import { createStore } from 'redux';
import { SET_LOGIN_STATE } from './constants/action-types';
import setLoginState from './actions';

const INITIAL_STATE = {
      loginState: ""
}
function reducer(state = INITIAL_STATE, action) {
  console.log('Teste redux')
  if(action.type === SET_LOGIN_STATE) {
  console.log(state)
  return { ...state }
  }
  return state
}


const store = createStore(reducer);

export default store;
